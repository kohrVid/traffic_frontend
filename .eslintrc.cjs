module.exports = {
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react-refresh/only-export-components': 'off',
    'no-extra-semi': 'off',
    'no-unused-vars': 'warn'
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['dist/*'],
  env: { browser: true, es2020: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals'
  ]
}
