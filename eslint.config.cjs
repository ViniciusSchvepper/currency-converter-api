const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'error',
      'no-unused-vars': 'error',
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'always']
    }
  }
]
