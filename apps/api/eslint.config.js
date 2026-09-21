import { config } from "@repo/eslint-config/base";

export default [
  ...config,
  {
    files: ["src/**/*.ts"],
    // TypeScript checks names; the base Babel parser treats type syntax as values.
    rules: { "no-undef": "off" },
    languageOptions: { globals: { process: "readonly", console: "readonly" } },
  },
];
