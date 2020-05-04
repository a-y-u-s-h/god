import express from "express"
import settings from "@/settings/application.yaml"
import database from "@/interfaces/database"

import routers from "@/modules/systems/routers"
import middlewares from "@/modules/systems/middlewares"

/*
  ======================================
    This order matters, and order of
    middleware functions and the attachment
    of routers matters as well. So just keep
    that in mind if you want to make changes.
  ======================================
*/
const app = express()
middlewares(app)
routers(app)

const start = async () => {
  try {
    await database.connect()
    app.listen(settings.server.port, () => {
      console.log(`REST API on http://localhost:${settings.server.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}

start()
