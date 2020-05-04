export default {
  /*
    ======================================
      Following are CRUD operations
      on the collection. These are valid only
      if the collection is related to a user,
      and if the schema has a 'createdBy' property.

      * GET    : single, multiple
      * CREATE : single
      * UPDATE : single
      * DELETE : single
    ======================================
  */
  get: {
    single: shape => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Status 404 if there's no document.
          * Returns document w/ Status 200 if found.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const _document = await shape.model
          .findOne({ createdBy: request.user._id, _id: request.params.id })
          .lean()
          .exec()
        if (!_document) return response.status(404).end()
        response.status(200).json({ data: _document })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    },
    multiple: shape => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Status 404 if there's no document(s).
          * Returns documents w/ Status 200 if found.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const documents = await shape.model
          .find({ createdBy: request.user._id })
          .lean()
          .exec()
        if (!documents) return response.status(404).end()
        response.status(200).json({ data: documents })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    }
  },
  create: {
    single: shape => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Returns document w/ Status 201
            if created successfully.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const { error } = shape.validate.schema(request.body)
        if (error)
          return response.status(400).send({ error: error.details[0].message })
        const _document = await shape.model.create({
          ...request.body,
          createdBy: request.user._id
        })
        response.status(201).json({ data: _document })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    }
  },
  update: {
    single: shape => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Returns updated document w/ Status 200
            if created successfully.
          * If it can't update, or if the document doesn't
            exist, it returns Status 404.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const { error } = shape.validate.schema(request.body)
        if (error)
          return response.status(400).send({ error: error.details[0].message })
        const updatedDocument = await shape.model
          .findOneAndUpdate(
            {
              createdBy: request.user._id,
              _id: request.params.id
            },
            request.body,
            { new: true, useFindAndModify: false }
          )
          .lean()
          .exec()
        if (!updatedDocument) return response.status(404).end()
        response.status(200).json({ data: updatedDocument })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    }
  },
  delete: {
    single: shape => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Returns deleted document w/ Status 200
            if deleted successfully.
          * If it can't delete, or if document doesn't
            exist, it returns Status 404.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const removed = await shape.model.findOneAndRemove(
          {
            createdBy: request.user._id,
            _id: request.params.id
          },
          { useFindAndModify: false }
        )
        if (!removed) response.status(404).end()
        return response.status(200).json({ data: removed })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    }
  }
}
