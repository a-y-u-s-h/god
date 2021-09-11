import React from "react"
import Systems from "@/systems"
import "@/settings/theme/tailwind/index.css"
import Theme from "@/settings/theme"

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
    <Theme>
      <Systems>
        <Component {...pageProps} />
      </Systems>
    </Theme>
  )
}

export default Application
