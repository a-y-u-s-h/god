import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import settings from "@/settings/application.yaml"

export default {
  auth: {
    register: shape => async (request, response) => {
      try {
        /*
          ======================================
            Determine whether the shape of the
            request body is according to specified
            schema.
          ======================================
        */
        const { error } = shape.validate.register(request.body)
        if (error)
          return response.status(400).send({ error: error.details[0].message })
        /*
          ======================================
            Now, check whether the email already
            exists in the database. If it's already
            present in the database, we can't add a
            new user.
          ======================================
        */
        const existing = await shape.model
          .findOne({ email: request.body.email })
          .lean()
          .exec()
        if (existing)
          return response
            .status(400)
            .send({ error: "email already exists in the database" })
        /*
          ======================================
            If 'email' isn't present in the
            database, user should be now saved.
            But before that the passsword must
            be hashed.
          ======================================
        */
        const salt = await bcrypt.genSalt(10)
        request.body.password = await bcrypt.hash(request.body.password, salt)
        /*
          ======================================
            Now that the 'text' password is replaced
            with 'hashed' password, we can now save it
            in the database.
          ======================================
        */
        const user = new shape.model(request.body)
        const created = await user.save()
        /*
          ======================================
            Now, the user can be logged in successfully.
            To manage sessions, we're going to use JWT strategy
            here (stateless session management).
          ======================================
        */
        const token = JWT.sign(
          { _id: user._id },
          process.env.JWT_SECRET ||
            settings.environment[process.env.environment].JWT.secret
        )
        response.header("Authorization", token).send({ token: token })
      } catch (e) {
        await response.status(400).send(e)
        throw e
      }
    },
    login: shape => async (request, response) => {
      try {
        /*
          ======================================
            Determine whether the shape of the
            request body is according to specified
            schema.
          ======================================
        */
        const { error } = shape.validate.login(request.body)
        if (error)
          return response
            .status(400)
            .send({ error: "invalid email or password" })
        /*
          ======================================
            Now, check whether the email already
            exists in the database. If email doesn't
            exists in the database send an error saying
            like yo, you're not registered.
          ======================================
        */
        const user = await shape.model
          .findOne({ email: request.body.email })
          .lean()
          .exec()
        if (!user)
          return response
            .status(404)
            .send({ error: "email doesn't exist in the database" })
        /*
          ======================================
            If email does exist in the database,
            we can proceed to checking whether
            the password provided by the user is correct.
          ======================================
        */
        const password = await bcrypt.compare(
          request.body.password,
          user.password
        )
        if (!password)
          return response.status(400).send({ error: "invalid password" })

        /*
          ======================================
            Now, the user can be logged in successfully.
            To manage sessions, we're going to use JWT strategy
            here (stateless session management).
          ======================================
        */
        const token = JWT.sign(
          { _id: user._id },
          process.env.JWT_SECRET ||
            settings.environment[process.env.environment].JWT.secret
        )
        response.header("Authorization", token).send({ token: token })
      } catch (e) {
        await response.status(400).send(e)
        throw e
      }
    }
  },
  crud: {
    /*
    ======================================
      Following are CRUD operations
      on the collection. You should be able to:

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
          const _document = await shape.model.create(request.body)
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
          const updatedDocument = await shape.model
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
}
