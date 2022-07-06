module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  rules: {
    "@typescript-eslint/no-shadow": ["error"],
    "no-shadow": "off",
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: true,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],
    "tsdoc/syntax": "warn",
  },
}
