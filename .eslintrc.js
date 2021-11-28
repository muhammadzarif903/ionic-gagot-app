module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'ban'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-empty': 'off', // allow empty block statements
    'no-async-promise-executor': 'off', // remove in future
    'no-case-declarations': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-unused-vars": ["off"],
    '@typescript-eslint/no-var-requires': 'off',
    // eslint-plugin-ban
    'ban/ban': [
      2,
      {name: 'fdescribe', message: "don't focus tests"},
      {name: 'fit', message: "don't focus tests"}
    ]
  }
};
