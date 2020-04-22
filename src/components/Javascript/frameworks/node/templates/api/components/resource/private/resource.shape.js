import mongoose from "mongoose"

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
export const model = mongoose.model("resource", schema)

/*
  ======================================
    For practical purposes we don't
    really need schema, we just need the
    model. But we'll export it anyways and
    call both of them together: "shape"
    of resource.
  ======================================
*/
export default {
  schema,
  model
}
