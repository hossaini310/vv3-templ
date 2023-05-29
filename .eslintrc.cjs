module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
