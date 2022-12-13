/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'off',
    'vue/multi-word-component-names': 'off',
    'camelcase': [2, {
      'properties': 'always'
    }],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'block-spacing': [2, 'always'],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'always'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }]

  }
};
