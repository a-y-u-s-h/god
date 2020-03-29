import React from "react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import notes from "./notes"
import _ from "."

storiesOf("Placeholder", module)
  .addDecorator(withKnobs)
  .addDecorator(f => <div style={{ width: "100vw", height: "100vh" }}>{f()}</div>)
  .add("default", () => <_ background={text("background", "#000")} onClick={action("clicked")} />, { notes: { markdown: notes["default"] } })
