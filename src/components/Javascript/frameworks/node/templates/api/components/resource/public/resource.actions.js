export default {
  /*
    ======================================
      Following are CRUD operations
      on the collection. You should

      * GET    : single, multiple
      * CREATE : single
      * UPDATE : single
      * DELETE : single
    ======================================
  */
  get: {
    single: model => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Status 404 if there's no document.
          * Returns document w/ Status 200 if found.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const _document = await model
          .findOne({ _id: request.params.id })
          .lean()
          .exec()
        if (!_document) return response.status(404).end()
        response.status(200).json({ data: _document })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    },
    multiple: model => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Status 404 if there's no document(s).
          * Returns documents w/ Status 200 if found.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const documents = await model
          .find({})
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
    single: model => async (request, response) => {
      /*
        ======================================
          Returns ->
          * Returns document w/ Status 201
            if created successfully.
          * Throws an error w/ Status 400 if error.
        ======================================
      */
      try {
        const _document = await model.create(request.body)
        response.status(201).json({ data: _document })
      } catch (e) {
        console.error(e)
        response.status(400).end()
      }
    }
  },
  update: {
    single: model => async (request, response) => {
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
        const updatedDocument = await model
          .findOneAndUpdate(
            {
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
    single: model => async (request, response) => {
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
        const removed = await model.findOneAndRemove(
          {
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