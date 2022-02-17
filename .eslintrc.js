module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020
  },
  globals: {
    THING: false,
    CMAP: false,
    uino: false,
    spray: false,
    horizion: false,
    GoldPlay: false,
  },
  rules: {
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "props",
          "data",
          "computed",
          "watch",
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "activated",
          "deactivated",
          "beforeDestroy",
          "destroyed",
          "methods",
        ]
      }
    ],
    // 强制 error
    indent: ['error', 4],
    'vue/html-indent': ['error', 4],
    'no-console': process.env.NODE_ENV === 'production' ? ["error", { allow: ["warn", "error"] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 推荐 warn
    'max-len': ['error', { 'code': 180 }],
    'vue/html-quotes': 'warn',
    'no-param-reassign': ['error', { 'props': false }],
    'camelcase': 0,
    'no-mixed-operators': 'off',
    'no-bitwise': 'off',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
