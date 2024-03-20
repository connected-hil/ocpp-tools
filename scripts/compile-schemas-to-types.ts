import { compile } from "json-schema-to-typescript";
import fs from "fs";
import path from "path";
import {
  validationFunctionAST,
  sharedImportsAST,
  importSchemaAST,
} from "./validation-function-ast";
import {
  createSourceFile,
  createPrinter,
  NewLineKind,
  ScriptKind,
  ScriptTarget,
  ListFormat,
  Node,
  factory,
} from "typescript";

const ocppVersions = ["v16"];

const getFilePath = (
  version: string,
  dir: "schemas" | "types" | "validation",
  name?: string
): string => {
  const components = [__dirname, "/../src/"];
  if (dir !== "schemas") {
    components.push("generated/");
  }
  const base = path.resolve(components.join(""));
  return [base, dir, version, name].filter(Boolean).join("/");
};

const generate = () => {
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  ocppVersions.forEach((version) => {
    const path = getFilePath(version, "schemas");
    const schemas = fs.readdirSync(path).map((file) => file.split(".")[0]);
    const generatedFun = getFilePath(version, "validation", `index.ts`);
    fs.writeFileSync(
      generatedFun,
      "// This file is generated with schema compilation\n"
    );
    const sourceFile = createSourceFile(
      getFilePath(version, "validation", `index.ts`),
      "",
      ScriptTarget.Latest,
      false,
      ScriptKind.TS
    );
    fs.appendFileSync(
      generatedFun,
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(sharedImportsAST()),
        sourceFile
      ) + "\n"
    );

    let imports: Node[] = [];
    let functions: Node[][] = [];
    let typeExports: string[] = [];

    schemas.forEach((schema) => {
      const contents = fs
        .readFileSync(getFilePath(version, "schemas", `${schema}.json`))
        .toString();
      const { title, ...rest } = JSON.parse(contents);

      // Postfix interface name with version
      const jsonSchema = {
        title: `${title}${version.toUpperCase()}`,
        ...rest,
      };

      imports.push(importSchemaAST(jsonSchema.title, version, schema));
      functions.push(validationFunctionAST(jsonSchema.title, version, schema));
      typeExports.push(`export { ${jsonSchema.title} } from "./${schema}";`);

      compile(jsonSchema, schema).then((ts) =>
        fs.writeFileSync(getFilePath(version, "types", `${schema}.ts`), ts)
      );
    });

    fs.appendFileSync(
      generatedFun,
      printer.printList(
        ListFormat.MultiLine,
        factory.createNodeArray(imports),
        sourceFile
      ) + "\n"
    );
    fs.writeFileSync(
      getFilePath(version, "types", "index.ts"),
      typeExports.join("\n")
    );
    functions.forEach((fun) => {
      fs.appendFileSync(
        generatedFun,
        printer.printList(
          ListFormat.MultiLine,
          factory.createNodeArray(fun),
          sourceFile
        ) + "\n"
      );
    });
    console.log("Done");
  });
};

generate();
