/*
  ======================================
    Content Serving API
  ======================================
*/

const path     = require("path")
const express  = require("express")
const api      = express()
const app      = (port = 4000) => {

  api.set("view engine", "ejs")
  api.set("views", path.join(__dirname, "views", "templates"))
  api.use(express.static(path.join(__dirname, "data")))
  api.use(express.static(path.join(__dirname, "views")))
  api.use(express.static(path.join(__dirname, "src")))

  /* :: -------------------------------------- :: */

  /*
    ======================================
      Add similar api.get functions to
      serve different pages at different
      routes.
    ======================================
  */
  api.get("/", (request, response) => {
    response.render("index.ejs")
  })

  /* :: -------------------------------------- :: */

  console.log(`Listening to port: ${port}`)
  api.listen(port)
}

/*
  ======================================
    Serving content at port 4000 by 
    default. Pass in port as parameter
    to change it.

    Also exporting the content serving
    API so that this module can be
    encapsulated in some other module.
  ======================================
*/

app()
exports.app = (typeof(app) != "undefined") ? app : undefined

/* :: -------------------------------------- :: */

