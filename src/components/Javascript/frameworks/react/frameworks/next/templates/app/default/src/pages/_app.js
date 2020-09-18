import React from "react"
import "@/assets/styles/index.css"
import theme from "@/settings/theme"
import { ChakraProvider as Theme } from "@chakra-ui/core"
import Systems from "@/systems"

export const Application = props => {
  /*
    ======================================
      This component is the entry point of
      the application. So if you have any global
      styles or anything else that you want to
      have applied globally, you can modify this
      component to achieve them.
    ======================================
  */
  const { Component, pageProps } = props
  return (
    <Theme theme={theme} resetCSS>
      <Systems>
        <Component {...pageProps} />
      </Systems>
    </Theme>
  )
}

export default Application
