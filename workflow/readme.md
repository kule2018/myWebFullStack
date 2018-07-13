## 前端工作流
- babel js 预编译器
    es6以前，es6以后
    使用最新的js语法来编写，运行的代码可以根据需求编译成相应的被浏览器兼容的版本
    babel 编译js
    source_code .babelrc cli targets(运行平台)
    presets(预处理集)
    babel的预处理，只是语法糖 class 没有
    es5里没有的es6语法，实现一遍，最基本的const...
    babel-core
    还有一些没有的Object.assign(), promise async
    plugins             yarn add babel-plugin-transform-runtime     专门针对与es6/7里面最新的东西，es5里没有的
                        yarn add babel-preset-stage-2 -D
- npm
- - npm run dev
- - npm install
- - 项目构建的基本流程
- postcss
    前缀，css 变量
- stylus/scss/less
