/*
  ======================================

     /$$$$$$                 /$$
    |_  $$_/                | $$
      | $$   /$$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
      | $$  | $$__  $$ /$$__  $$ /$$__  $$|  $$ /$$/
      | $$  | $$  \ $$| $$  | $$| $$$$$$$$ \  $$$$/
      | $$  | $$  | $$| $$  | $$| $$_____/  >$$  $$
     /$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$$ /$$/\  $$
    |______/|__/  |__/ \_______/ \_______/|__/  \__/

    This will guide you on how to create a component with
    multiple types. For example, you may have same navigation
    component but you want to be able to change its type based
    on some config files. Wouldn't it be nice to use it like this:
    
    -------------------------------------------
      import Component from "<src>"
      <Component type="default"></Component>
      <Component type="darkula"></Component>
    -------------------------------------------

    To do this, go ahead and make a folder component (type) of this
    particular component inside `types` folder, and check out index.js
    inside `types` folder to export that type. After that you're all set!
    (If you want to use `theme` prop instead of `type`, you can do it in this file)
    (Just change `type` in this file to `theme` everywhere below.)

  ======================================
*/

import React from "react"
import * as types from "./types"

export default ({ children, type = "default", ...props }) => {
  const _Placeholder = types[`_${type.replace(/-|\s+/g, "_").toUpperCase()}`]
  return <_Placeholder {...props}>{children}</_Placeholder>
}
