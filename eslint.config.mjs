import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS and TS files with js plugin
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // JS files with CommonJS
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  // TS Config
  ...tseslint.configs.recommended,

  // ✅ Custom Rules Section
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "no-var": "error",
      semi: "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
    },
  },
]);
