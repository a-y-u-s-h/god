import { Router } from "express"
import user from "@/modules/fragments/user"

/*
  ======================================
    Import a resource here, like so:
    import resource from "@/modules/resources/resource"
  ======================================
*/

export default app => {
  const api = Router()
  api.use("/user", user.router)
  /*
    ======================================
      Mount that resource's router here,
      before the line: `app.use("/api", api)`
      and after the line: `const api = Router()`
      Do it like this:

      api.use("/resources", resource.router)
    ======================================
  */

  /*
    ======================================
      Add protected routes here, like so:
      api.use("/resources", user.protect, resource.router)
    ======================================
  */
  app.use("/api", api)
}
