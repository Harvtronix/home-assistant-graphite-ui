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
        "react",
        "react-hooks",
        "jsdoc"
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
        "max-len": [
            "warn",
            { "code": 100 }
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
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "semi": [
            "error",
            "never"
        ],
        "jsdoc/check-alignment": 1,
        "jsdoc/check-examples": 1,
        "jsdoc/check-indentation": 1,
        "jsdoc/check-param-names": 1,
        "jsdoc/check-syntax": 1,
        "jsdoc/check-tag-names": 1,
        "jsdoc/check-types": 1,
        "jsdoc/newline-after-description": 1,
        "jsdoc/no-undefined-types": 1,
        "jsdoc/require-description-complete-sentence": 1,
        "jsdoc/require-hyphen-before-param-description": 1,
        "jsdoc/require-param": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-returns-check": 1,
        "jsdoc/require-returns-description": 1,
        "jsdoc/require-returns-type": 1,
        "jsdoc/valid-types": 1
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
