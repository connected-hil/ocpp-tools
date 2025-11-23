import fs from "fs";
import path from "path";

interface JSONSchema {
  $schema?: string;
  $id?: string;
  title?: string;
  type?: string;
  properties?: Record<string, any>;
  definitions?: Record<string, any>;
  additionalProperties?: boolean;
  required?: string[];
  [key: string]: any;
}

const basePath = path.resolve(__dirname, "../src/schemas/v16");

/**
 * Convert a property name to a proper type name
 * e.g., "errorCode" -> "ErrorCodeEnumType"
 *       "type" -> "TypeEnumType"
 *       "status" -> "StatusEnumType"
 */
function propertyNameToTypeName(propName: string): string {
  // Capitalize first letter of each word
  const capitalized = propName
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return `${capitalized}EnumType`;
}

/**
 * Check if a property schema represents an inline enum
 */
function isInlineEnum(propSchema: any): boolean {
  return (
    propSchema &&
    typeof propSchema === "object" &&
    propSchema.type === "string" &&
    Array.isArray(propSchema.enum)
  );
}

/**
 * Refactor a single schema file to extract inline enums
 */
function refactorSchemaFile(filePath: string): void {
  const content = fs.readFileSync(filePath, "utf-8");
  const schema: JSONSchema = JSON.parse(content);

  // Skip if no properties to process
  if (!schema.properties) {
    return;
  }

  // Track if we made any changes
  let hasChanges = false;

  // Initialize definitions if needed
  if (!schema.definitions) {
    schema.definitions = {};
  }

  // Process each property
  for (const [propName, propSchema] of Object.entries(schema.properties)) {
    if (isInlineEnum(propSchema)) {
      const typeName = propertyNameToTypeName(propName);

      // Create the enum definition
      schema.definitions[typeName] = {
        type: "string",
        additionalProperties: false,
        enum: propSchema.enum,
      };

      // Add description if present
      if (propSchema.description) {
        schema.definitions[typeName].description = propSchema.description;
      }

      // Replace the inline enum with a reference
      schema.properties[propName] = {
        $ref: `#/definitions/${typeName}`,
      };

      hasChanges = true;
      console.log(`  - Extracted ${propName} -> ${typeName}`);
    }
  }

  // Clean up empty definitions if no enums were extracted
  if (Object.keys(schema.definitions).length === 0) {
    delete schema.definitions;
  }

  // Write back the schema if we made changes
  if (hasChanges) {
    fs.writeFileSync(filePath, JSON.stringify(schema, null, 2) + "\n");
    console.log(`✓ Updated ${path.basename(filePath)}`);
  }
}

/**
 * Process all v16 schema files
 */
function refactorAllSchemas(): void {
  const files = fs
    .readdirSync(basePath)
    .filter((file) => file.endsWith(".json"));

  console.log(`Processing ${files.length} schema files...\n`);

  for (const file of files) {
    const filePath = path.join(basePath, file);
    console.log(`Processing ${file}...`);
    refactorSchemaFile(filePath);
    console.log();
  }

  console.log("Done! Run 'pnpm run generate' to regenerate types.");
}

refactorAllSchemas();

