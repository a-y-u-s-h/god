import React from "react"
import settings from "./settings.json"
import * as components from "./style";

export default ({ data = settings, children, ...props }) => {
  const { Container } = components
  return (
    <Container>
      {children}
    </Container>
  )
}
