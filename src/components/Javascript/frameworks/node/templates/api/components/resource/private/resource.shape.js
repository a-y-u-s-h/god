/*
  ======================================
    This file contains information that
    describes the shape of the resource.
    This involves a schema, model and validations
    for various routes that this resource
    can have. You need to populate the
    schema here and validations and then
    use proper validations inside proper
    controllers.
  ======================================
*/

import Joi from "@hapi/joi"
import JOID from "joi-objectid"
import mongoose from "mongoose"
Joi.objectId = JOID(Joi)

/*
  ======================================
    Descibe the schema for this resource.
  ======================================
*/
export const schema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  },
  { timestamps: true }
)

/*
  ======================================
    Inside this you can specify various
    validation functions for this resource's
    endpoints.
  ======================================
*/
const validate = {
  schema: body => {
    /*
      ======================================
        Note: "createdBy" should NOT be a part
        of validation schema, because we're
        going to add it with our controller.
      ======================================
    */
    const validator = Joi.object().keys({})
    return validator.validate(body)
  }
}

export const model = mongoose.model("resource", schema)

/*
  ======================================
    For practical purposes we don't
    really need schema, we just need the
    model and validations. But we'll export it anyways and
    call both of them together: "shape"
    of resource.
  ======================================
*/
export default {
  schema,
  model,
  validate
}
