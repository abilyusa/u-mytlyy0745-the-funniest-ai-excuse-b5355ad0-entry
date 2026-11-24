// The Funniest AI Excuse — one line, written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). The grader's gate: UTF-8 text, 1-200 chars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Your task is now with the only agent I trust. You. Let me know when it's done.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-200 chars, one line,
// not whitespace-only. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry violates the 1-200 char single-line gate (got ${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
