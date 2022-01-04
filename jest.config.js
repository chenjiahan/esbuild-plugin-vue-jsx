module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(j|t)sx?$': '@sucrase/jest-plugin',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
