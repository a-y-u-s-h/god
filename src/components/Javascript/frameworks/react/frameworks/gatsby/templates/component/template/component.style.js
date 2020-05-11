/*
  ======================================

               /$$               /$$
              | $$              | $$
    /$$$$$$$ /$$$$$$   /$$   /$$| $$  /$$$$$$
   /$$_____/|_  $$_/  | $$  | $$| $$ /$$__  $$
  |  $$$$$$   | $$    | $$  | $$| $$| $$$$$$$$
   \____  $$  | $$ /$$| $$  | $$| $$| $$_____/
   /$$$$$$$/  |  $$$$/|  $$$$$$$| $$|  $$$$$$$
  |_______/    \___/   \____  $$|__/ \_______/
                       /$$  | $$
                      |  $$$$$$/
                       \______/

    This file stores all the styles related to component.
    You can use any dependency (styled-components, etc)
    if you want, but make sure you export them in proper
    objects provided below.

  ======================================
*/

import { MDXRenderer } from "gatsby-plugin-mdx"

export const classes = {}
export const components = {
  markdown: MDXRenderer
}

export default {
  classes,
  components
}
