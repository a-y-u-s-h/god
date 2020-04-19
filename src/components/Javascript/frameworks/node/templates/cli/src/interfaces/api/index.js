/*
  ======================================
                         /$$
                        |__/
      /$$$$$$   /$$$$$$  /$$
     |____  $$ /$$__  $$| $$
      /$$$$$$$| $$  \ $$| $$
     /$$__  $$| $$  | $$| $$
    |  $$$$$$$| $$$$$$$/| $$
     \_______/| $$____/ |__/
              | $$
              | $$
              |__/
    
    When you import this folder as:

    import api from "interfaces/api"

    You get two objects:

    * info: This object will provide you
      with information about what's available
      and the endpoints.

    * api: This wraps up API instances
      and already made request functions
      associated with them.

  ======================================
*/

import axios from "axios"

/*
  ======================================
    Import this object wherever you need
    to figure out endpoints. This object
    is no magic, just some information
    about API interfaces we have.
  ======================================
*/
export const info = {}

/*
  ======================================
    Let's say we integrate multiple
    APIs in the future, so this is a mega
    api object that stores all instances 
    of an axios object with different base
    URLs and stuff.
  ======================================
*/
export const api = {}

/*
  ======================================
    This is the object that you should
    specifically import in order to
    work with or test APIs. It includes
    helper functions like fetch, and put
    and others that are specific to APIs
    that this tool uses.
  ======================================
*/
export const interfaces = {}

/*
  ======================================
    Complete import of information, 
    base instance and available interfaces
    together is available as well.
  ======================================
*/
export default {
  info,
  api,
  interfaces
}
