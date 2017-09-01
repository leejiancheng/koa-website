module.exports = {
"parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": false,
        "es6": true,
        "commonjs": true,
        "amd": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-undef": ["error"],//important
        "callback-return": ["error"],
        "semi": ["error", "always"],
        "class-methods-use-this":["error"],
        "no-constant-condition": ["error",{ "checkLoops": false }],
        "no-obj-calls": ["error"],
        "valid-typeof": ["error",{ "requireStringLiterals": true }],
        "array-callback-return": ["error"],
        "block-scoped-var": ["error"],
        "consistent-return": ["error"],
        "no-unreachable": ["error"],
        "curly": ["error","multi-line"],
        "dot-location": ["error", "property"],
        "eqeqeq": ["error", "smart"],
        "no-caller": ["error"],
        "no-case-declarations": ["error"],
        "no-fallthrough": ["error"],
        "no-global-assign": ["error"],
        "no-iterator": ["error"],
        "no-lone-blocks": ["error"],
        "no-loop-func": ["error"],
        "no-new-symbol": ["error"],
        "no-new-wrappers": ["error"],
        "no-new": ["error"],
        "no-octal": ["error"],
        "no-redeclare": ["error"],
        "no-return-assign": ["error"],
        "no-self-compare": ["error"],
        "no-throw-literal": ["error"],
        "no-unmodified-loop-condition": ["error"],
        "no-unused-labels": ["error"],
        "no-debugger": ["error"],
        "no-eval": ["error"],
        "no-implied-eval": ["error"],
        "no-new-require": ["error"],
        "no-useless-concat": ["error"],
        "yoda": ["error", "never", { "onlyEquality": true }],
        "no-unsafe-negation": ["error"],
        "no-label-var": ["error"],
        "no-extra-semi":"error",

        //comment------------------------------------------------------
        // "no-empty":["warn", { "allowEmptyCatch": true }],
        // "no-unused-vars": "warn",
        
        // "no-use-before-define": "warn",
        // "quotes": ["error","double",{ "allowTemplateLiterals": true ,"avoidEscape": true}],
        // "no-unused-expressions": ["error",{ "allowShortCircuit": true, "allowTernary": true }],


        //off----------------------------------------------------------------------
        "no-empty":"off",
        "no-unused-vars": "off",
        "no-sparse-arrays":"off",

        "no-useless-escape":"off",
        "no-console":"off"
    },
    "globals": {
        
    }
};