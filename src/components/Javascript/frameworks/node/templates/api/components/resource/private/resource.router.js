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
const { model } = shape
/*
  ======================================
    Route   : /api/resource(plural)/
    CREATE  : single
    GET     : multiple
  ======================================
*/
router
  .route("/")
  .get(actions.get.multiple(model))
  .post(actions.create.single(model))

/*
  ======================================
    Route    : /api/resource(plural)/:id
    GET      : single
    UPDATE   : single
    DELETE   : single
  ======================================
*/
router
  .route("/:id")
  .get(actions.get.single(model))
  .put(actions.update.single(model))
  .delete(actions.delete.single(model))

export default router
