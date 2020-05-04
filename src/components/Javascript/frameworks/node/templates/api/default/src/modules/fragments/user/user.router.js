/*
  ======================================
    Routes:

    Grab all controllers and assign
    them to proper verbs. By default
    this takes care of two essential
    routes and all their required combinations
    with verbs:

    * /api/user
    * /api/user/:id

  ======================================
*/
import { Router } from "express"
import shape from "./user.shape"
import actions from "./user.actions"

const router = Router()

/*
  ======================================
    Route   : /api/user/register
    CREATE  : single
    GET     : multiple
  ======================================
*/
router.route("/register").post(actions.auth.register(shape))

/*
  ======================================
    Route   : /api/user/login
    CREATE  : single
    GET     : multiple
  ======================================
*/
router.route("/login").post(actions.auth.login(shape))

/*
  ======================================
    Route   : /api/user/
    CREATE  : single
    GET     : multiple
  ======================================
*/
router
  .route("/")
  .get(actions.crud.get.multiple(shape))
  .post(actions.crud.create.single(shape))

/*
  ======================================
    Route    : /api/user/:id
    GET      : single
    UPDATE   : single
    DELETE   : single
  ======================================
*/
router
  .route("/:id")
  .get(actions.crud.get.single(shape))
  .put(actions.crud.update.single(shape))
  .delete(actions.crud.delete.single(shape))

export default router
