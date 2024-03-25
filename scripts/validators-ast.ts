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
  createSourceFile
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
    factory.createStringLiteral(
      ["src", "generated", version, "schemas"].join("/")
    ),
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
    factory.createStringLiteral("src/validation"),
    undefined
  ),
  ...definitions.map(({ title, typeFile }) => {
    return factory.createImportDeclaration(
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(title)
          )
        ])
      ),
      factory.createStringLiteral(typeFile.replace(/.ts$/, "")),
      undefined
    );
  }),
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
      " @returns { boolean } true if payload is valid against schema, false otherwise\n",
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
              ),
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
                factory.createIdentifier("data"),
              ]
            )
          )
        ),
      ],
      NodeFlags.Const
    )
  ),
];

export const generateValidators = (
  version: string,
  definitions: GeneratorDefinition[]
) => {
  const filename = ["src", "generated", version, "validators.ts"].join("/");
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  const sourceFile = createSourceFile(
    filename,
    "",
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  );

  fs.writeFileSync(
    filename,
    [
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
    ].join("\n")
  );
};
