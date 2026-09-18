const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = [
  // 1. eslint:recommended 대응
  js.configs.recommended,

  // 2. plugin:react/recommended & plugin:react/jsx-runtime 대응
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  // 3. 사용자 커스텀 설정 및 react-hooks
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // plugin:react-hooks/recommended 대응
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // 리액트 버전 자동 감지
      },
    },
  },
];
