/*
  ======================================
    API
  ======================================
*/

const path     = require("path")
const express  = require("express")
const api      = express()
const port     = 4000

function main () {
  api.use(express.static(path.join(__dirname, "data")))
  api.use(express.static(path.join(__dirname, "src")))

  /* :: -------------------------------------- :: */

  api.get("/api/", (request, response) => {
    
  })

  /* :: -------------------------------------- :: */

  console.log(`Listening @ port:${port}`)
  api.listen(port)
}

if (require.main === module) {
  main()
} else {
  exports.main = (typeof(main) != "undefined") ? main : undefined
}