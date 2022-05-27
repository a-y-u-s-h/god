import React from "react"
import Head from "next/head"
import Systems from "@/systems"
import Theme from "@/settings/theme"
import "@/settings/theme/tailwind/index.css"

const NoSSR = ({ children, ...props }) => {
  /*
    ======================================
      When this component mounts on the DOM,
      the SSR disables (window object is now
      defined) so it's safe to hydrate rest
      of the components (children) now.
    ======================================
  */
  const [SSR, setSSR] = React.useState(true)
  React.useEffect(() => setSSR(false), [])
  return (
    <>
      <div className="w-full h-full overflow-hidden" suppressHydrationWarning>
        {SSR ? null : children}
      </div>
    </>
  )
}

export const Router = ({ ...props }) => {
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
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Application</title>
      </Head>
      <NoSSR>
        <Systems>
          <Theme>
            <Component {...pageProps} />
          </Theme>
        </Systems>
      </NoSSR>
    </>
  )
}

export default Router
