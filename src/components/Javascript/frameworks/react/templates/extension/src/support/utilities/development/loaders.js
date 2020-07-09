/*
  ====================================================
    This file contains some custom loaders.
  =====================================================
*/

const jsyaml = require("js-yaml")
const fs = require("fs")

exports.yaml = path => {
  /*
    ======================================
      Read YAML file and return a JSON object.
    ======================================
  */
  try {
    const file = jsyaml.safeLoad(fs.readFileSync(`${path}`, "utf8"))
    const indentedJson = JSON.stringify(file, null, 2)
    return file
  } catch (e) {
    console.log(e)
  }
}
