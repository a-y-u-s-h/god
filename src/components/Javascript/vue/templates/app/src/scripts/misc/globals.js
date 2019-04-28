import Vue from "vue"

let get = require.context("@/layout/globals/", false, /\w*\.(vue|js)$/)

get.keys().forEach(file => {
  let config = get(file)
  let name = file.replace("./", "").split(".")
  name.pop()
  name = name.join("-")
  Vue.component(name, config.default || config)
})
