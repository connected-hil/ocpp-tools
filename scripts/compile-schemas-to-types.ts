import { compile, type JSONSchema } from "json-schema-to-typescript";
import fs from "fs";
import path from "path";
import { generateSchemaFile } from "./schema-ast";
import { generateValidators } from "./validators-ast";
import { generateTypesIndex } from "./types-ast";
import { capitalize, type GeneratorDefinition } from "./common";
import { generateVersionIndex } from "./version-index-ast";

const ocppVersions = ["v16", "v201"];

const basePath = path.resolve([__dirname, "/../src/"].join(""));

const generate = (): void => {
  const typesIndex = [basePath, "types", "index.ts"].join("/");
  fs.rmSync(typesIndex, { force: true });
  ocppVersions.forEach((version) => {
    const path = [basePath, "schemas", version].join("/");
    const schemas = fs
      .readdirSync(path)
      .filter((file) => /.json$/.exec(file))
      .map((file) => file.split(".")[0]);

    const schemasDefinitions: GeneratorDefinition[] = [];

    schemas
      .filter((s) => s.length > 0)
      .forEach((schema) => {
        const schemaPath = [path, `${schema}.json`].join("/");
        const contents = fs.readFileSync(schemaPath).toString();
        const { title, $id, ...rest } = JSON.parse(contents);
        const name = title ?? $id.split(":").pop();
        // Postfix interface name with version
        const jsonSchema = {
          title: `${name}${capitalize(version)}`,
          ...rest
        };

        const typeFile = [
          "..",
          "..",
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
              [basePath, "types", version, `${schema}.ts`].join("/"),
              ts
            );
          })
          .catch((error) => {
            console.error("Caught error in generate", error);
          });
      });
    generateValidators(version, schemasDefinitions);

    generateTypesIndex(version, schemasDefinitions);
    generateSchemaFile(version, schemasDefinitions);
    generateVersionIndex(version, schemasDefinitions);
    console.log("Done ", version);
  });
};

generate();
