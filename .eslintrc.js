module.exports = {
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.spec.tsx'],
      rules: {
        'no-restricted-globals': 'off',
      },
    },
  ],
};
