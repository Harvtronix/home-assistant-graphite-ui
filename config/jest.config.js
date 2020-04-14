module.exports = {
    rootDir: '..',

    clearMocks: true,

    coverageDirectory: '<rootDir>/jest-coverage',

    moduleNameMapper: {
        '~[/\\\\](.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy'
    },

    testMatch: [
        '<rootDir>/src/__tests__/**/*.js'
    ],

    transform: {
        '\\.(js|jsx)$': 'babel-jest'
    },

    transformIgnorePatterns: [
        'node_modules[/\\\\](?!@carbon[/\\\\]icons-react)'
    ]
}
