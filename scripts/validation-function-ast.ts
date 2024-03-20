import {
  //addSyntheticLeadingComment,
  factory,
  NodeFlags,
  SyntaxKind,
  Node,
} from "typescript";

const toLowerCaseCamelCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);

export const sharedImportsAST = (): Node[] => [
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
        ),
      ])
    ),
    factory.createStringLiteral("src/schemas"),
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
          factory.createIdentifier("validateOCPPMessage")
        ),
      ])
    ),
    factory.createStringLiteral("src/validation"),
    undefined
  ),
];

export const importSchemaAST = (
  typeName: string,
  version: string,
  schema: string
): Node =>
  factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          undefined,
          factory.createIdentifier(typeName)
        ),
      ])
    ),
    factory.createStringLiteral(
      ["src", "generated", "types", version, schema].join("/")
    ),

    undefined
  );

export const validationFunctionAST = (
  typeName: string,
  version: string,
  _schema: string
) => [
  factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(["isValid", typeName].join("")),
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
                factory.createIdentifier(typeName),
                undefined
              )
            ),
            factory.createToken(SyntaxKind.EqualsGreaterThanToken),
            factory.createCallExpression(
              factory.createIdentifier("validateOCPPMessage"),
              undefined,
              [
                factory.createPropertyAccessExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("schemas"),
                    factory.createIdentifier(version)
                  ),
                  factory.createIdentifier(
                    toLowerCaseCamelCase(typeName.replace(/Request/, ""))
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
