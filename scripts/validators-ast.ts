import {
  factory,
  NodeFlags,
  SyntaxKind,
  type Node,
  ListFormat,
  createPrinter,
  NewLineKind,
  ScriptTarget,
  ScriptKind,
  createSourceFile,
  EmitHint
} from "typescript";
import fs from "fs";
import { type GeneratorDefinition } from "./common";

export const validationImportsAST = (
  version: string,
  definitions: GeneratorDefinition[]
): Node[] => [
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier("schemas")
        )
      ])
    ),
    factory.createStringLiteral(["..", "..", "schemas"].join("/")),
    undefined
  ),
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier("validateOCPPPayload")
        )
      ])
    ),
    factory.createStringLiteral("../../validation"),
    undefined
  ),
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        definitions.map(({ title }) =>
          factory.createImportSpecifier(
            true,
            undefined,
            factory.createIdentifier(title)
          )
        )
      )
    ),
    factory.createStringLiteral([".", "..", "..", "types", version].join("/")),
    undefined
  )
];

export const validatorFunctionAST = (
  version: string,
  title: string
): Node[] => [
  factory.createJSDocComment(
    [
      ["Validation function for ", title, " using JSON included schema."].join(
        ""
      ),
      " @param { unknown } data JSON decoded payload to validate",
      " @returns { boolean } true if payload is valid against schema, false otherwise\n"
    ].join("\n")
  ),
  factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(["isValid", title].join("")),
          undefined,
          undefined,
          factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                factory.createIdentifier("data"),
                undefined,
                factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword),
                undefined
              )
            ],
            factory.createTypePredicateNode(
              undefined,
              factory.createIdentifier("data"),
              factory.createTypeReferenceNode(
                factory.createIdentifier(title),
                undefined
              )
            ),
            factory.createToken(SyntaxKind.EqualsGreaterThanToken),
            factory.createCallExpression(
              factory.createIdentifier("validateOCPPPayload"),
              undefined,
              [
                factory.createPropertyAccessExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("schemas"),
                    factory.createIdentifier(version)
                  ),
                  factory.createIdentifier(
                    title.charAt(0).toLowerCase() + title.slice(1)
                  )
                ),
                factory.createIdentifier("data")
              ]
            )
          )
        )
      ],
      NodeFlags.Const
    )
  )
];

export const actiopToValidatorAST = (version: string, titles: string[]): Node =>
  factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(
            ["actionValidator", version.toUpperCase()].join("")
          ),
          undefined,
          factory.createTypeLiteralNode([
            factory.createIndexSignature(
              undefined,
              [
                factory.createParameterDeclaration(
                  undefined,
                  undefined,
                  factory.createIdentifier("key"),
                  undefined,
                  factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
                  undefined
                )
              ],
              factory.createFunctionTypeNode(
                undefined,
                [
                  factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    factory.createIdentifier("data"),
                    undefined,
                    factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword),
                    undefined
                  )
                ],
                factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword)
              )
            )
          ]),
          factory.createObjectLiteralExpression(
            titles.map((title) =>
              factory.createPropertyAssignment(
                factory.createStringLiteral(title),
                factory.createIdentifier(
                  ["isValid", title, "Request", version.toUpperCase()].join("")
                )
              )
            ),
            true
          )
        )
      ],
      NodeFlags.Const
    )
  );

export const generateValidators = (
  version: string,
  definitions: GeneratorDefinition[]
): void => {
  const filename = ["src", "validation", version, "index.ts"].join("/");
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  const sourceFile = createSourceFile(
    filename,
    "",
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  );

  const actions = definitions
    .filter((t) => /RequestV\d+$/.exec(t.title))
    .map(({ title }) => title.replace(/RequestV\d+$/, ""));

  fs.writeFileSync(
    filename,
    [
      printer.printNode(
        EmitHint.Unspecified,
        factory.createJSDocComment("Generated by scripts/validators-ast.ts"),
        sourceFile
      ),
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(validationImportsAST(version, definitions)),
        sourceFile
      ),
      ...definitions.map(({ title }) =>
        printer.printList(
          ListFormat.MultiLine,
          factory.createNodeArray(validatorFunctionAST(version, title)),
          sourceFile
        )
      ),
      printer.printNode(
        EmitHint.Unspecified,
        actiopToValidatorAST(version, actions),
        sourceFile
      )
    ].join("\n")
  );
};
