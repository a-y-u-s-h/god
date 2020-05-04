/*
  ======================================
    This file is required to setup
    unit testing in this project. It
    imports Gatsby's preset for Babel
    and then creates a transformer for
    Jest using these options.

    If you want to move this file make
    sure you also update the location in
    jest.config.js
  ======================================
*/

const options = {
  presets: ["babel-preset-gatsby"]
}

module.exports = require("babel-jest").createTransformer(options)
