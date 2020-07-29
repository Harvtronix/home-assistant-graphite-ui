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
        'react',
        'react-hooks',
        'simple-import-sort'
    ],
    rules: {
        'camelcase': 'off',
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
        'react/jsx-indent': [
            "error",
            4
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'simple-import-sort/sort': 'warn',
        'spaced-comment': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
}
