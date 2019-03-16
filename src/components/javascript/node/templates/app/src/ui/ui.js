/*
  ======================================
    Just to export native and web
    in a single variable : ui
  
    web    -> ui.web 
    native -> ui.native
  ======================================
*/

const web    = require("./web/main.js").main;
const native = require("./native/main.js").main;

const ui     = {web: web, native: native};
exports.ui   = (typeof(ui) != "undefined") ? ui : undefined;
