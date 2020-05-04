import mongoose from "mongoose"
import settings from "@/settings/application.yaml"
import dotenv from "dotenv"
dotenv.config()

export const connect = (uri = settings.database.uri, options = {}) => {
  /*
    ======================================
      Connects to the database, suppresses
      temporary random Mongoose related
      warning in the console, and does the
      same things as connecting with
      the database.
    ======================================
  */
  return mongoose.connect(process.env.DATABASE || uri, {
    ...options,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log(`Connected to DB: ${uri}`))
}

export default {
  connect
}
