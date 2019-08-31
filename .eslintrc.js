const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react-hooks', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/destructuring-assignment': ['never'],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.test.js'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './test/jest.shared.js'),
          },
        },
      },
    },
  ],
};