module.exports = {
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows the use of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json'
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'airbnb-typescript/base'], // Uses the linting rules from @typescript-eslint/eslint-plugin
  env: {
    node: true, // Enable Node.js global variables
  },
};  