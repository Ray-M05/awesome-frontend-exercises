module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/javascript/**/*.test.js',
    '**/typescript/**/*.test.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};