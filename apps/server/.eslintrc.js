module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { printWidth: 125 }], // Max line length before wrap (default=100) **GOTTA CHANGE IT IN .prettierrc TOO**
  },
};
