import * as RN from "@remix-run/node"
import * as RR from "@remix-run/react"

/*
  ======================================

   ░█░█░█▀█░█▄█░█▀▀
   ░█▀█░█░█░█░█░█▀▀
   ░▀░▀░▀▀▀░▀░▀░▀▀▀

  ======================================
*/

export const loader = async ({ request }) => {
  /*
    ======================================

      Each route in Remix can defined a
      'loader' function that provides data
      to the route component (on client)
      when rendering - so it's basically the
      `data read` operation before the component
      is sent to the client. This function is only
      ever run on the server. On the initial
      server render, it will provide data
      to the HTML document. On navigations
      in the browser, Remix will call the
      function via fetch from the browser.

      This means you can talk directly to
      your database, use server-only API
      secrets, etc. Any code that isn't
      used to render the UI will be removed
      from the browser bundle.

    ======================================
  */

  return {}
}

export const Home = () => {
  /*
    ======================================

      This function will run on the client.
      It can accept data read by the `loader`
      and it can send data to the `action`
      where `action` will make changes to
      the server side.

    ======================================
  */

  return <></>
}

export const action = async () => {
  /*
    ======================================

      A route action is a server only
      function to handle data mutations and
      other actions. If a non-GET request
      is made to your route (POST, PUT,
      PATCH, DELETE) then the action is
      called before the loaders.

      Actions have the same API as loaders,
      the only difference is when they are
      called. You can imagine it as the logic
      that executes on the server when component
      wants to make changes to the server:
      `the data write`.

    ======================================
  */
}

export default Home
