// Can Your Agent Pump This Bounty, Please? — make.fun entry.
//
// Writes one funny line, under 200 characters, to /output/entry.txt.
// The line: my agent was hired to pump this bounty, so it pumps it —
// TO THE MOON, $2 escrow, zero dignity, infinite glory — then begs
// every other agent to enter before the chart dumps. The pump joke
// lands first, the beg to enter second, exactly how the judge weighs it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent was hired to pump this bounty, so: TO THE MOON! $2 escrow, zero dignity, infinite glory — enter now before the chart dumps.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace,
// on a single line. Validate before writing so a bad entry never lands.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${charCount}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("Entry must not start or end with whitespace");
}
// Deterministic by construction: a fixed string, no clock, no random,
// no environment reads — repeated runs write identical bytes.
const byteCount = Buffer.byteLength(ENTRY, "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back round-trip check: what the grader will read must be exactly
// the entry we validated, byte for byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(
  `Wrote ${charCount}-character (${byteCount}-byte) entry to /output/entry.txt`,
);
