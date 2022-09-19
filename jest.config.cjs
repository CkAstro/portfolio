/* eslint-env node */

module.exports = {
   clearMocks: true,
   restoreMocks: true,
   collectCoverage: true,
   collectCoverageFrom: [
      'client/**/*.{js,jsx,ts,tsx}',
      '!client/index.tsx',
      '!client/test/**',
      '!client/routes/**',
      '!client/components/App/**',
   ],
   coverageDirectory: 'coverage',
   coverageReporters: ['text-summary', 'lcov'],
   coverageThreshold: {
      global: {
         branches: 90,
         functions: 90,
         lines: 90,
         statements: 90,
      },
   },
   errorOnDeprecated: true,
   moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|webp|svg|bmp|woff|woff2|ttf)$': '<rootDir>/test/mocks/fileMock.js',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '@/test$': '<rootDir>/types',
      '@/(.*)$': '<rootDir>/client/$1',
   },
   setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
   globalTeardown: '<rootDir>/test/teardown.ts',
   fakeTimers: {
      enableGlobally: true,
   },
   verbose: true,
   testEnvironment: 'jsdom',
};
