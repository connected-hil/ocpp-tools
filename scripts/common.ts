export interface GeneratorDefinition {
  title: string
  version: string
  schemaFile: string
  typeFile: string
}

export const toLowerCaseCamelCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1)
