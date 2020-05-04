import axios from "axios"

/*
  ======================================
     Primary API interface for this app exists
     in this file. You can import this in particular,
     but it's advised to use the folder import
     everywhere for consistency.
  ======================================
*/

/*
  ======================================
    Put all information related to
    camelot API (all endpoints) and
    other stuff if required inside this
    object. Use this everywhere below to write
    logic.
  ======================================
*/
const info = {
  root: "http://localhost:3000/gatsby/api",
  endpoints: {
    user: {
      register: `${this.root}/user/register`,
      login: `${this.root}/user/login`
    }
  }
}
/*
  ======================================
    API instance.
  ======================================
*/
const instances = {
  public: axios.create({
    baseURL: info.root
  }),
  private: axios.create({
    baseURL: info.root
  }),
  user: axios.create({
    baseURL: info.root
  })
}

/*
  ======================================
    Import this interface in place of
    API instance. Everything that you
    can fetch or put or delete, etc.
    must go inside this object as a resolver.
    Ideally, you should import API folder
    itself though and pick proper interface
    when you need it.
  ======================================
*/
const actions = {
  user: {
    register: async ({ username, email, password }) => {
      const api = instances.user
    },
    login: async ({ email, password }) => {}
  },
  crud: {
    get: {
      single: async (resource) => {},
      multiple: async (resource) => {}
    },
    create: {
      single: async (resource) => {
        return await axios({
          method: "post",
          url: ""
        })
      }
    },
    update: {
      singke: async (resource) => {}
    },
    delete: {
      single: async (resource) => {}
    }
  }
}

/*
  ======================================
    All information, instance and interfaces
    are available for import as well.
  ======================================
*/
export default {
  info,
  actions,
  interfaces
}
