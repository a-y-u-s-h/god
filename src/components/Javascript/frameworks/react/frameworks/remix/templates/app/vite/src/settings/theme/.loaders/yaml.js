import fs from "node:fs"
import yaml from "js-yaml"

/*
  ======================================

    ░█░█░█▀█░█▄█░█░░
    ░░█░░█▀█░█░█░█░░
    ░░▀░░▀░▀░▀░▀░▀▀▀

    This file exports a simple function
    to load YAML files from their paths.
    Path must be relative to project root,
    and must not use local aliases.

  ======================================
*/
export const read = path => {
  try {
    const file = yaml.load(fs.readFileSync(`${path}`, "utf8"))
    const indentedJson = JSON.stringify(file, null, 2)
    return file
  } catch (e) {
    console.log(e)
  }
}

export default {
  read
}
