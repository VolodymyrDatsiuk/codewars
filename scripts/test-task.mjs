import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const taskNumber = process.argv[2];
const katasDir = join(process.cwd(), "katas");
const vitestBin = join(process.cwd(), "node_modules", ".bin", process.platform === "win32" ? "vitest.cmd" : "vitest");

if (!existsSync(katasDir)) {
  console.error("Missing katas directory.");
  process.exit(1);
}

const runVitest = (args) => {
  const result = spawnSync(vitestBin, args, {
    stdio: "inherit",
    shell: false
  });

  process.exit(result.status ?? 1);
};

if (!taskNumber) {
  runVitest(["run"]);
}

if (!/^\d+$/.test(taskNumber)) {
  console.error(`Task id must be a number, received "${taskNumber}".`);
  process.exit(1);
}

const matches = readdirSync(katasDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.startsWith(`${taskNumber}-`))
  .map((entry) => entry.name);

if (matches.length === 0) {
  console.error(`No kata folder found for task ${taskNumber}. Expected katas/${taskNumber}-*/.`);
  process.exit(1);
}

if (matches.length > 1) {
  console.error(`Multiple kata folders found for task ${taskNumber}:`);
  matches.forEach((match) => console.error(`- katas/${match}`));
  process.exit(1);
}

const specFile = join("katas", matches[0], "index.spec.ts");

if (!existsSync(specFile)) {
  console.error(`Missing test file: ${specFile}`);
  process.exit(1);
}

runVitest(["run", specFile]);
