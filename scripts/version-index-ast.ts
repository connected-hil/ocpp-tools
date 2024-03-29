import {
  createPrinter,
  createSourceFile,
  factory,
  ListFormat,
  NewLineKind,
  type Node,
  ScriptKind,
  ScriptTarget
} from 'typescript'
import { type GeneratorDefinition } from './common'
import fs from 'fs'

const commonExportsAST = (): Node[] => [
  factory.createExportDeclaration(
    undefined,
    false,
    undefined,
    factory.createStringLiteral('./validators'),
    undefined
  ),
  factory.createExportDeclaration(
    undefined,
    false,
    undefined,
    factory.createStringLiteral('./types'),
    undefined
  )
]

const typesExportsAST = (descriptions: GeneratorDefinition[]): Node[] =>
  descriptions.map(({ title, typeFile }) =>
    factory.createExportDeclaration(
      undefined,
      false,
      factory.createNamedExports([
        factory.createExportSpecifier(
          false,
          undefined,
          factory.createIdentifier(title)
        )
      ]),
      factory.createStringLiteral(typeFile.replace(/\.ts$/, '')),
      undefined
    )
  )

export const generateVersionIndex = (
  version: string,
  descriptions: GeneratorDefinition[]
): void => {
  const filename = ['src', 'generated', version, 'index.ts'].join('/')
  const printer = createPrinter({ newLine: NewLineKind.LineFeed })

  const sourceFile = createSourceFile(
    filename,
    '',
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  )

  fs.writeFileSync(
    filename,
    [
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(commonExportsAST()),
        sourceFile
      ),
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(typesExportsAST(descriptions)),
        sourceFile
      )
    ].join('\n')
  )
}
