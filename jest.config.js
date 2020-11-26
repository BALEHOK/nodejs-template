module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'reports/coverage',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
  },
};
