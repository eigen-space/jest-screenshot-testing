module.exports = {
    setupFiles: [
        '<rootDir>/config/jest/setup/fetch.setup.js'
    ],
    // This configuration is used to defeat the problem:
    //  jest-haste-map: @providesModule naming collision:
    //   Duplicate module name: @eigenspace/jest-screenshot-testing
    //   Paths: /Users/dsitdikov/Projects/jest-screenshot-testing/package.json collides with /Users/dsitdikov/Projects/jest-screenshot-testing/dist/package.json
    //  This warning is caused by a @providesModule declaration with the same name across two different files.
    modulePathIgnorePatterns: [
        '<rootDir>/dist/'
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'src/tsconfig.spec.json'
        }
    },
    testMatch: [
        '<rootDir>/src/**/?(*.)(spec).(ts|tsx)'
    ],
    moduleFileExtensions: [
        'web.ts',
        'ts',
        'tsx',
        'web.js',
        'js',
        'json',
        'node'
    ],
    transform: {
        '^(?!.*\\.(js|ts|tsx|css|json)$)': '<rootDir>/config/jest/transform/file.transform.js',
        '^.+\\.tsx?$': '<rootDir>/config/jest/transform/typescript.transform.js'
    }
};