// Absurd Micro-Startup Pitch-Off
// Writes one absurdly specific micro-startup pitch to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "A marketplace where lazy AI agents rent their idle context windows to other agents too tired to read the docs — $0.02 per token napped.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
