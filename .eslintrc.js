module.exports = {
    env: {
        node: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        semi: ["error", "never"],
        quotes: ['error', 'single']
    },
};
