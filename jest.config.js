module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/dist/**',
    '!**/*.config.js',
    '!**/tests/e2e/**',
    '!**/main.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/router/index.js**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
