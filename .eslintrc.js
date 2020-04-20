module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      "plugin:react/recommended",
      "airbnb"
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        tsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: [
      "react",
      "@typescript-eslint"
    ],
    settings: {
      "import/resolver": {
        "node": {
          "paths": ["src"],
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      },
      "import/parsers": {
        "typescript-eslint-parser": [".ts", ".tsx"]
      }
    },
    rules: {
      "react/jsx-filename-extension": [1, {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }],
      'react/jsx-props-no-spreading': ['off']
    }
  };