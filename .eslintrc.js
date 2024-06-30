module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': ['error', 'windows'],
    //'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    //'@typescript-eslint/no-unused-vars': ['error'],
    'max-len': ['error', { code: 125 }],
  },
};
