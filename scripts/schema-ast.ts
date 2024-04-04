import {
  // addSyntheticLeadingComment,
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
import { type GeneratorDefinition, toLowerCaseCamelCase } from "./common";

export const importJsonSchemaAST = (
  version: string,
  title: string,
  schemafile: string
): Node =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      factory.createIdentifier(toLowerCaseCamelCase(title)),
      undefined
    ),
    factory.createStringLiteral(
      ["src", "schemas", version, schemafile].join("/")
    ),

    undefined
  );

const schemaMapAST = (version: string, names: string[]): Node =>
  factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier("schemas"),
          undefined,
          undefined,
          factory.createObjectLiteralExpression(
            [
              factory.createPropertyAssignment(
                factory.createIdentifier(version),
                factory.createObjectLiteralExpression(
                  names.map((n) =>
                    factory.createShorthandPropertyAssignment(
                      factory.createIdentifier(n),
                      undefined
                    )
                  ),
                  true
                )
              )
            ],
            true
          )
        )
      ],
      NodeFlags.Const
    )
  );

export const generateSchemaFile = (
  version: string,
  definitions: GeneratorDefinition[]
): void => {
  const filename = ["src", "generated", "schemas.ts"].join("/");
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
        factory.createNodeArray(
          definitions.map(({ version, title, schemaFile }) =>
            importJsonSchemaAST(version, title, schemaFile)
          )
        ),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        schemaMapAST(
          version,
          definitions.map(({ title }) => toLowerCaseCamelCase(title))
        ),
        sourceFile
      )
    ].join("\n")
  );
};
