module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'camelcase': 'off',
        'eqeqeq': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [
            'warn',
            { 'code': 100 }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        'spaced-comment': 'off'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
}
