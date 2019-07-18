import React from "react"
import { storiesOf } from "@storybook/react"
import { linkTo } from "@storybook/addon-links"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import notes from "./notes"
import _ from "."

storiesOf("Layouts|Base", module)
  .addDecorator(withKnobs)
  .add("default", () => <_ type={text("type", "default")} background={text("background", "#FFF")} onClick={action("clicked")} />, { notes: { markdown: notes["default"] } })
  .add("horizontal", () => <_ type={text("type", "horizontal")} ratio={text("ratio", "50%")} onClick={action("clicked")} />, { notes: { markdown: notes["horizontal"] } })
  .add("vertical", () => <_ type={text("type", "vertical")} ratio={text("ratio", "50%")} onClick={action("clicked")} />, { notes: { markdown: notes["vertical"] } })
