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

  let port = 4000;
  console.log(`Listening to port: ${port}`);
  api.listen(port);
};