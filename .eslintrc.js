module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //强制使用单引号
    quotes: ["error", "single"],
    //强制使用分号结尾
    semi: ["error", "always"],
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": ["error", "always"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
