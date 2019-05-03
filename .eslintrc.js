module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "off",
        "no-unused-vars": [
            "warn"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "never"
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
