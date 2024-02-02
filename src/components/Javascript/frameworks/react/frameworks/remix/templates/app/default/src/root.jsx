import React from "react"
import "@/settings/theme/index.css"
import * as RN from "@remix-run/node"
import * as RR from "@remix-run/react"
import favicon from "~/assets/images/favicon.png"
import System from "@/systems/application/index.jsx"

/*
  ======================================

   ░█▀▄░█▀█░█▀█░▀█▀
   ░█▀▄░█░█░█░█░░█░
   ░▀░▀░▀▀▀░▀▀▀░░▀░

   These components are to be used once
   inside your root route `root.{js,jsx,ts,tsx}`
   They include everything Remix figured
   out or built in order for your page to
   render properly.

  ======================================
*/

export const Root = () => {
  /*
    ======================================

      This component attaches the root of
      the document in our final build. We
      programatically include every component
      that changes based on data or route
      here, along with some other useful
      components that provide features such
      as: restoring scroll based on last
      position or live reloading while in
      development mode. You can name this
      component anything, but you cannot
      rename the file as of this moment.

    ======================================
  */

  return (
    <html>
      <head>
        <RR.Meta />
        <RR.Links />
      </head>
      <body>
        <System.Provider>
          <RR.Outlet />
        </System.Provider>
        <RR.ScrollRestoration />
        <RR.LiveReload />
        <RR.Scripts />
      </body>
    </html>
  )
}

export const links = () => {
  /*
    ======================================

      All links exports will go into
      <Links /> component automatically
      through magic done by remix. This is
      done so that you can programmatically
      add or remove links if needed. This
      is a remix thing, you cannot name it
      anything else other than 'links'.

    ======================================
  */
  return [{ rel: "icon", type: "image/x-icon", href: favicon }]
}

export const meta = () => {
  /*
    ======================================

      All meta exports will go into
      <Meta /> component automatically
      through magic done by remix. This is
      done so that you can programatically
      add or remove metadata if needed.
      Because it's a remix thing, you cannot
      name it anything else other than 'meta'.

    ======================================
  */
  return [
    { charset: "UTF-8" },
    { title: "Placeholder" },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ]
}

export default Root
