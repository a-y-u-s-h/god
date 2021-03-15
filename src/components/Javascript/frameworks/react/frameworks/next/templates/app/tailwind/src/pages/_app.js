import React from "react"
import Systems from "@/systems"
import "@/settings/theme/index.css"

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
    <Systems>
      <Component {...pageProps} />
    </Systems>
  )
}

export default Application
