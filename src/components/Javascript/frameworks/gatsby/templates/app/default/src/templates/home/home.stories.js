import React from "react"
import { storiesOf } from "@storybook/react"
import { linkTo } from "@storybook/addon-links"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"
import "src/styles/scss/global.scss"
import notes from "./notes"
import _ from "."

storiesOf("Templates|Home", module)
  .addDecorator(withKnobs)
  .addDecorator(f => <div style={{ width: "100%", height: "100%", overflow: "hidden", padding: 0, margin: 0 }}>{f()}</div>)
  .add("default", () => <_ onClick={action("clicked")} />, { notes: { markdown: notes["default"] } })
