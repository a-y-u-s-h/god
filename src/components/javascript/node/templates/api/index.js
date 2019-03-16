/*
  ======================================
    API
  ======================================
*/

const path     = require("path");
const express  = require("express");
const api      = express();

exports.main = () => {
  api.use(express.static(path.join(__dirname, "data")));
  api.use(express.static(path.join(__dirname, "src")));

  /* :: -------------------------------------- :: */

  api.get("/api/", (request, response) => {
    
  });

  /* :: -------------------------------------- :: */

  api.listen(4000);
};