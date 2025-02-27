module.exports = {
  customSyntax: 'postcss-scss',
  defaultSeverity: 'error',
  extends: 'stylelint-config-recommended',
  ignoreFiles: [
    '**/dist/**',
    '**/helpers/**',
    '**/__tests__/**',
    'tmp/**',
    '**/types/**',
    '**/styles/utilities/**',
    '**/docs/public/**',
    '**/docs/static/**',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  reportDescriptionlessDisables: true,
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  rules: {
    // Turning this off in favor of 'at-rule-allowed-list'
    'at-rule-no-unknown': null,
    'at-rule-allowed-list': [
      [
        'function',
        'if',
        'use',
        'media',
        'supports',
        'font-face',
        'keyframes',
        'extend',
        'mixin',
        'include',
        // TODO: At some point we will be switching from 'import' to 'use'
        'import',
      ],
      { severity: 'warning' },
    ],
    // Importants should only be used in our utility classes if possible
    'declaration-no-important': [true, { severity: 'warning' }],
    'function-no-unknown': [true, { ignoreFunctions: ['percentage', 'math.div'] }],
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'order/order': ['custom-properties', 'declarations', 'rules'],
    'order/properties-alphabetical-order': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
