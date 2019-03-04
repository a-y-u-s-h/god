/*
  ======================================
    API
  ======================================
*/

const path     = require("path");
const express  = require("express");
const api      = express();

exports.main = () => {
  api.set("view engine", "ejs");
  api.set("views", path.join(__dirname, "src", "skeleton"));
  api.use(express.static(path.join(__dirname, "data")));
  api.use(express.static(path.join(__dirname, "src")));

  /* :: -------------------------------------- :: */

  api.get("/", (request, response) => {
    response.render("index.ejs");
  });

  /* :: -------------------------------------- :: */

  api.listen(4000);
};