import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "At the breakpoint, dawn",
  "The log says it lost a day",
  "My clock was the bug",
];

const text = haiku.join("\n");
if (haiku.length !== 3 || [...text].length > 200) {
  throw new Error("The entry must be three lines and at most 200 characters");
}

const output = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(output, { recursive: true });
writeFileSync(join(output, "entry.txt"), text, "utf8");
