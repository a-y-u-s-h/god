import { configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { addParameters } from "@storybook/react"
import themes from "./themes"
import "./storybook.scss"

/*
  ======================================
    Automatically import all files 
    ending in *.stories.js
  ======================================
*/
const req = require.context("../src", true, /.stories.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

/*
  ======================================
    Pick a theme, either from defaults
    or a custom theme stored in themes
    folder.
  ======================================
*/
addParameters({
  options: {
    panelPosition: "right",
    theme: themes["discord"],
  },
})

/*
  ======================================
    Gatby's Overrides:

    1. Link Overrides: 
      Gatsby defines a global called ___loader
      to prevent its method calls from creating
      console erros. You override it here.

    2. Gatby internal mocking to prevent
    unnecessary erros in storybook testing 
    environment.

    3. window.___navigate method that Gatby
    defines and uses to report what path a Link
    would be taking us to if it wasn't inside a 
    storybook. => has to be overriden as well.

  ======================================
*/

global.___loader = { enqueue: () => {}, hovering: () => {} }
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => action("NavigateTo:")(pathname)
configure(loadStories, module)

/* <======================================> */

