const path = require('path');

module.exports = {
  parser: "@typescript-eslint/parser", 
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-interface": 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },
  plugins:[
    'import'
  ],
  settings: {
    "react": {
      "version": "detect"
    },
    'import/resolver': {
        typescript: {
          config: path.join(__dirname, './next.config.js'),
          alwaysTryTypes: true
        },
      },
  }
}