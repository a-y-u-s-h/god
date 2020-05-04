import JWT from "jsonwebtoken"
import settings from "@/settings/application.yaml"

/*
  ======================================
    This is a middleware function. We
    can add this middleware to any route
    that we want to protect. Every protected
    route will run this function first to check
    the authenticity of the token
  ======================================
*/
export default (request, response, next) => {
  const token = request.header("Authorization")
  if (!token) return response.status(401).send({ error: "access denied" })
  try {
    const verified = JWT.verify(
      token,
      process.env.JWT_SECRET || settings[process.env.ENVIRONMENT].JWT.secret
    )
    /*
      ======================================
        'verified' is the payload object that
        we get after combining the session token
        with the JWT secret that stays on the server.
        (JWT secret could be any random string).
      ======================================
    */
    request.user = verified
    next()
  } catch (e) {
    response.send(400).send({ error: "invalid token" })
  }
}
