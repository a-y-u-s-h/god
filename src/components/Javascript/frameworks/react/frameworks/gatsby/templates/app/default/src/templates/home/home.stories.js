import React from "react"
import { storiesOf } from "@storybook/react"
import { linkTo } from "@storybook/addon-links"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import notes from "./notes"
import _ from "."

storiesOf("Home", module)
  .addDecorator(withKnobs)
  .add("default", () => <_ onClick={action("clicked")} />, { notes: { markdown: notes["default"] } })
