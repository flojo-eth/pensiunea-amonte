import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Design prototype (source of truth, not application code).
    "files 2/**",
    // Claude Code worktrees: full checkouts with their own .next builds, which
    // ran ESLint out of memory when they were linted as part of this project.
    ".claude/**",
  ]),
]);

export default eslintConfig;
