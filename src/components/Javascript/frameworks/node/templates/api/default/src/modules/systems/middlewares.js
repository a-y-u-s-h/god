import cors from "cors"
import logger from "morgan"
import { json, urlencoded } from "body-parser"

export default app => {
  app.disable("x-powered-by")
  /*
  ======================================
    Middlewares:

    These are functions on an incoming
    request with guaranteed order. They're
    great for authenticating, transforming
    the request, tracking, error handling, etc.
    They can also respond o request like a controller
    would, but that is not their intent.
  ======================================
*/
  /*
  ======================================
    Allows Cross Origin Resource Sharing.
    When you want to share files or talk
    to some website that's on a different domain,
    it allows you to do that.
  ======================================
*/
  app.use(cors())
  /*
  ======================================
    Converts the request into appropriate format.
    We recieve bytestream on network and it parses
    and converts all that into a request object.
    For example: `request.body` contains the body.
  ======================================
*/
  app.use(json())
  /*
  ======================================
    This does all the logging for us. Whenever we
    recieve some request, it logs them out in the console.
  ======================================
*/
  app.use(logger("dev"))

  /*
  ======================================
    Also a middleware that transforms the request.
    It just allows us to attach parameters to a URL,
    like a query string. And it does some other stuff for us.
  ======================================
*/
  app.use(urlencoded({ extended: true }))
}
