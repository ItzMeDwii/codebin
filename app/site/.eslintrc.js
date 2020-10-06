/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/typescript/recommended",
        "@hazmi35/eslint-config/typescript"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        project: path.join(__dirname, "tsconfig.eslint.json"),
        ecmaVersion: 2020,
        createDefaultProgram: true
    },
    root: false,
    rules: {
        "no-console": "off",
        "no-debugger": "off"
    }
};
