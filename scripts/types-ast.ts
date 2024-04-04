import {
  // addSyntheticLeadingComment,
  factory,
  // NodeFlags,
  SyntaxKind,
  type Node,
  // ListFormat,
  createPrinter,
  NewLineKind,
  ScriptTarget,
  ScriptKind,
  createSourceFile,
  EmitHint,
  ListFormat
} from 'typescript'
import fs from 'fs'
import { type GeneratorDefinition } from './common'

const errorCodes = {
  v16: [
    'NotImplemented',
    'NotSupported',
    'InternalError',
    'ProtocolError',
    'SecurityError',
    'FormationViolation',
    'PropertyConstraintViolation',
    'OccurenceConstraintViolation',
    'TypeConstraintViolation',
    'GenericError'
  ]
}

const unionTypeAST = (name: string, types: string[]): Node =>
  factory.createTypeAliasDeclaration(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createIdentifier(name),
    undefined,
    factory.createUnionTypeNode(
      types.map((t) =>
        factory.createTypeReferenceNode(factory.createIdentifier(t), undefined)
      )
    )
  )

const enumAST = (name: string, enums: string[]): Node =>
  factory.createEnumDeclaration(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createIdentifier(name),
    enums.map((n) =>
      factory.createEnumMember(
        factory.createIdentifier(n),
        factory.createStringLiteral(n)
      )
    )
  )

const importAST = (name: string, path: string): Node => factory.createImportDeclaration(
  undefined,
  factory.createImportClause(
    false,
    undefined,
    factory.createNamedImports([
      factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier(name)
      )
    ])
  ),
  factory.createStringLiteral(path),
  undefined
)

const importsAST = (definitions: GeneratorDefinition[]): Node[] =>
  definitions.map(({ title, typeFile }) => importAST(title, typeFile.replace(/\.ts$/, '')))

export const generateTypesIndex = (version: string, definitions: GeneratorDefinition[]): void => {
  const filename = ['src', 'generated', version, 'types', 'index.ts'].join('/')
  const printer = createPrinter({ newLine: NewLineKind.LineFeed })
  const titles = definitions.map((s) => s.title)
  const sourceFile = createSourceFile(
    filename,
    '',
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  )
  const upperCaseVersion = version.toUpperCase()

  fs.writeFileSync(
    filename,
    [
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(importsAST(definitions)),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        unionTypeAST(
          ['Action', upperCaseVersion].join(''),
          titles
            .filter((t) => /Request/.exec(t))
            .map((t) => t.replace(version.toUpperCase(), ''))
            .map((a) => `"${a.replace(/Request/, '')}"`)
        ),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        unionTypeAST(
          ['OCPPRequestType', upperCaseVersion].join(''),
          titles
            .filter((t) => /Request/.exec(t))
        ),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        unionTypeAST(
          ['OCPPResponseType', upperCaseVersion].join(''),
          titles
            .filter((t) => /Response/.exec(t))
        ),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        enumAST(
          ['OCPPErrorCode', version.toLocaleUpperCase()].join(''),
          errorCodes.v16
        ),
        sourceFile
      ),
      printer.printNode(
        EmitHint.Unspecified,
        unionTypeAST(
          ['OCPPRPCMessage', version.toLocaleUpperCase()].join(''),
          ['OCPPCall', 'OCPPCallResult', 'OCPPCallError'].map(
            (m) => m + version.toUpperCase()
          )
        ),
        sourceFile
      )
    ].join('\n')
  )
}
