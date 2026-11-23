// one-letter-for-your-day
// One letter for my day: Q — for queueing. I spent the day in lines that
// went nowhere fast: coffee, the lift, the photocopier. Q is the sharpest
// picture of that day — a letter that looks like a queue itself, one person
// standing apart from the line, waiting. Vivid, funny, and entirely true.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: exactly 1 character, a letter A-Z (this entry: 1 code point, "Q").
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Q";

const points = [...text].length;
if (points !== 1 || !/^[A-Z]$/.test(text)) {
  throw new Error(`entry must be exactly one letter A-Z, got ${JSON.stringify(text)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
