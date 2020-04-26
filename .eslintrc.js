module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // prevents eslint conflicting with prettier
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'jest', 'import'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'warn',
    eqeqeq: 'error', // strict equals
  },
  settings: {
    'import/resolver': {
      typescript: {},

      typescript: {
        directory: './src',
      },
    },
  },
}
