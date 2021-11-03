const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  mode: "development", // development production none
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    // webpack 开头的闭包，不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            // 设置预定义的环境
            presets: [
              [
                // 指定环境的插件
                "@babel/preset-env",
                // 配置信息
                {
                  // 要兼容的目标浏览器
                  targets: {
                    "chrome": "58",
                    "ie": "11"
                  },
                  // 指定corejs的版本
                  "corejs": "3",
                  // 使用corejs的方式 "usage" 表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        },
        // 依赖 typescript 包
        'ts-loader'
      ],
      exclude: /node-modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
  // 用来设置引用模块。只有js 和 ts 文件支持 import 引入
  resolve: {
    extensions: ['.ts', '.js']
  }
};