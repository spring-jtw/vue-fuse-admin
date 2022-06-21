module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    //! 配置了项目中的 eslint 规则
    rules: {
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
        "vue/max-attributes-per-line": [2, {
            "singleline": 10,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-trailing-spaces': 0,
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/name-property-casing": ["error", "PascalCase"],
        "vue/no-v-html": "off",
        'accessor-pairs': 2,
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {
            'allowSingleLine': true
        }],
        'camelcase': [0, {
            'properties': 'always'
        }],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'constructor-super': 2,
        'curly': [2, 'multi-line'],
        'dot-location': [2, 'property'],
        // 'eol-last': 2,//文件的末尾需要有空的一行
        'eqeqeq': ["error", "always", { "null": "ignore" }],
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }],
        'handle-callback-err': [2, '^(err|error)$'],
        'vue/html-indent': ['error', 4],
        'jsx-quotes': [2, 'prefer-single'],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'keyword-spacing': [2, {
            'before': true,
            'after': true
        }],
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2,//new时必须加小括号
        'no-array-constructor': 2,//禁止使用数组构造器
        'no-caller': 2,//禁止使用arguments.caller或arguments.callee
        'no-class-assign': 2,//禁止给类赋值
        'no-cond-assign': 2,//禁止在条件表达式中使用赋值语句
        'no-const-assign': 2,//禁止修改const声明的变量
        'no-control-regex': 0,//禁止在正则表达式中使用控制字符
        'no-delete-var': 2,//不能对var声明的变量使用delete操作符
        'no-dupe-args': 2,//函数参数不能重复
        'no-dupe-class-members': 2,//switch中的case标签不能重复
        'no-dupe-keys': 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-duplicate-case': 2,//switch中的case标签不能重复
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,//禁止使用eval
        'no-ex-assign': 2,//禁止给catch语句中的异常参数赋值
        'no-extend-native': 2,//禁止扩展native对象
        'no-extra-bind': 2,//禁止不必要的函数绑定
        'no-extra-boolean-cast': 2,//禁止不必要的bool转换
        'no-extra-parens': [2, 'functions'],//禁止函数非必要的括号
        'no-fallthrough': 2,//禁止switch穿透
        'no-func-assign': 2,//禁止重复的函数声明
        'no-implied-eval': 2,//禁止使用隐式eval
        'no-inner-declarations': [2, 'functions'],//禁止在块语句中使用声明（变量或函数）
        'no-invalid-regexp': 2,//禁止无效的正则表达式
        'no-irregular-whitespace': 2,//不能有不规则的空格
        'no-iterator': 2,//禁止使用__iterator__ 属性
        'no-label-var': 2,//label名不能与var声明的变量名相同
        'no-labels': [2, {
            'allowLoop': false,
            'allowSwitch': false
        }],
        'no-lone-blocks': 2,//禁止不必要的嵌套块
        'no-mixed-spaces-and-tabs': 2,//禁止混用tab和空格
        'no-multi-spaces': 2,//不能用多余的空格
        'no-multi-str': 2,//字符串不能用\换行
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],//空行最多不能超过2行
        'no-native-reassign': 2,//不能重写native对象
        'no-negated-in-lhs': 2,//in 操作符的左边不能有!
        'no-new-object': 2,//禁止使用new Object()
        'no-new-require': 2,//禁止使用new require
        'no-new-wrappers': 2,//禁止使用new创建包装实例，new String new Boolean new Number
        'no-obj-calls': 2,//不能调用内置的全局对象，比如Math() JSON()
        'no-octal': 2,//禁止使用八进制数字
        'no-octal-escape': 2,//禁止使用八进制转义序列
        "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
        'no-path-concat': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-return-assign': [2, 'except-parens'],
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow-restricted-names': 2,
        'no-spaced-func': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-unexpected-multiline': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': [2, {
            'defaultAssignment': false
        }],
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],
        'no-useless-call': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-escape': 0,
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'one-var': [2, {
            'initialized': 'never'
        }],
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '?': 'before',
                ':': 'before'
            }
        }],
        'padded-blocks': [2, 'never'],
        'quotes': [2, 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'semi': 0,
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'space-before-blocks': [2, 'always'],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }],
        'template-curly-spacing': [2, 'never'],
        'use-isnan': 2,
        'valid-typeof': 2,
        'wrap-iife': [2, 'any'],
        'yield-star-spacing': [2, 'both'],
        'yoda': [2, 'never'],
        'prefer-const': 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'object-curly-spacing': [2, 'always', {
            objectsInObjects: false
        }],
        'array-bracket-spacing': [2, 'never']
    }
}
