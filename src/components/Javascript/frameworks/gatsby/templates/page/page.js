import React from "react"
import settings from "./settings.json"
import * as components from "./style"
import { graphql, useStaticQuery } from "gatsby"

export default ({ data = settings, children, ...props }) => {
  const { Container } = components
  return (
    <Container>
      {children}
    </Container>
  )
}
