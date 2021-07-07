// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  automock: true,
  collectCoverageFrom: ['**/*.ts', '!**/*.d.ts', '!bin/**/*', '!webpack.config.ts'],
  transformIgnorePatterns: ['node_modules', 'coverage', 'build'],
  moduleFileExtensions: ['ts', 'js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
