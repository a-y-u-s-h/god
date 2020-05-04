/*
  ======================================
    Routes:

    Grab all controllers and assign
    them to proper verbs. By default
    this takes care of two essential
    routes and all their required combinations
    with verbs:

    * /api/resource
    * /api/resource/:id

  ======================================
*/
import { Router } from "express"
import shape from "./resource.shape"
import actions from "./resource.actions"

const router = Router()
/*
  ======================================
    Route   : /api/resource(s)/
    CREATE  : single
    GET     : multiple
  ======================================
*/
router
  .route("/")
  .get(actions.get.multiple(shape))
  .post(actions.create.single(shape))

/*
  ======================================
    Route    : /api/resource(s)/:id
    GET      : single
    UPDATE   : single
    DELETE   : single
  ======================================
*/
router
  .route("/:id")
  .get(actions.get.single(shape))
  .put(actions.update.single(shape))
  .delete(actions.delete.single(shape))

export default router
