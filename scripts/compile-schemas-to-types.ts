import { type JSONSchema, compile } from "json-schema-to-typescript";
import fs from "fs";
import path from "path";
import { generateSchemaFile } from "./schema-ast";
import { generateValidators } from "./validators-ast";
import { generateTypesIndex } from "./types-ast";
import { type GeneratorDefinition } from "./common";
import { generateVersionIndex } from "./version-index-ast";

const ocppVersions = ["v16"];

const basePath = path.resolve([__dirname, "/../src/"].join(""));

const generate = (): void => {
  ocppVersions.forEach((version) => {
    const path = [basePath, "schemas", version].join("/");
    const schemas = fs.readdirSync(path).map((file) => file.split(".")[0]);

    const schemasDefinitions: GeneratorDefinition[] = [];

    schemas.forEach((schema) => {
      const schemaPath = [path, `${schema}.json`].join("/");
      const contents = fs.readFileSync(schemaPath).toString();
      const { title, ...rest } = JSON.parse(contents);

      // Postfix interface name with version
      const jsonSchema = {
        title: `${title}${version.toUpperCase()}`,
        ...rest
      };

      const typeFile = [
        "src",
        "generated",
        version,
        "types",
        `${schema}.ts`
      ].join("/");
      schemasDefinitions.push({
        version,
        title: jsonSchema.title,
        schemaFile: [schema, ".json"].join(""),
        typeFile
      });

      compile(jsonSchema as JSONSchema, schema)
        .then((ts) => {
          fs.writeFileSync(
            [basePath, "generated", version, "types", `${schema}.ts`].join("/"),
            ts
          );
        })
        .catch((e) => {
          console.error(e);
        });
    });
    generateValidators(version, schemasDefinitions);
    generateTypesIndex(version, schemasDefinitions);
    generateSchemaFile(version, schemasDefinitions);
    generateVersionIndex(version, schemasDefinitions);
    console.log("Done");
  });
};

generate();
