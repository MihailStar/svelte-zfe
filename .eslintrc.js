module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      files: ['./**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'prefer-const': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  root: true,
  settings: {
    'svelte3/ignore-styles': (attributes) => attributes.type === 'text/scss',
  },
};
