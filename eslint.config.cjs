const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 'tab']
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser
    }
  }
]
