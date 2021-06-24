module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    rules: {
        "max-lines-per-function": ["warn", 20],
        "max-params": ["warn", 6]
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  };