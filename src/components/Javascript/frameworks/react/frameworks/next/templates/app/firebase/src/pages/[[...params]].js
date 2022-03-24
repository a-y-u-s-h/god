import React from "react"
import System from "@/systems/application"
import { useRouter } from "next/router"
import { useHotkeys } from "react-hotkeys-hook"
import { Transition } from "@headlessui/react"

import Marketing from "@/components/universe/marketing"
import Application from "@/components/universe/application"

export const Home = React.forwardRef(({ children, ...props }, ref) => {
  const router = useRouter()
  const system = System.use()
  const { params } = router.query
  const { state, events, styles, settings } = system
  const { theme, layout, user } = settings
  /*
    ======================================
      Keybindings:

      1. user.connect            =   Ctrl + Shift + Enter
      2. user.disconnect         =   Ctrl + Shift + Backspace
      3. layout.next             =   Ctrl + Shift + Up
      4. layout.prev             =   Ctrl + Shift + Down
      5. theme.next              =   Ctrl + Shift + Right
      6. theme.prev              =   Ctrl + Shift + Left
    ======================================
  */
  useHotkeys("ctrl+shift+enter", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    user.events.connect()
    element?.focus()
  })

  useHotkeys("ctrl+shift+backspace", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    user.events.disconnect()
    element?.focus()
  })

  useHotkeys("ctrl+shift+down", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    layout.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+up", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    layout.events.next()
    element?.focus()
  })

  useHotkeys("ctrl+shift+left", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    theme.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+right", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    theme.events.next()
    element?.focus()
  })

  return (
    <>
      <Transition {...styles?.container}>
        <Transition {...styles?.authentication?.disconnected?.container}>
          <div {...styles?.authentication?.disconnected?.element}>
            {/*
              ====================================
                Whatever is inside here will get
                rendered when the user is truly
                disconnected. For most purposes,
                we're going to keep the marketing or
                our landing page here.
              ====================================
            */}
            <Marketing />
          </div>
        </Transition>
        <Transition {...styles?.authentication?.connecting?.container}>
          <div {...styles?.authentication?.connecting?.element}>
            {/*
            ====================================
              Whatever component is here will get
              rendered when the user has triggered
              authentication, and is directed to
              metamask to complete the sign in process;
              Or when the user tries to come back and the
              app automatically tries to connect them.
              We can control the behavior
              in systems/interface/styles if we want
              a different flow.
            ====================================
          */}
            <Marketing />
          </div>
        </Transition>
        <Transition {...styles?.authentication?.connected?.container}>
          <div {...styles?.authentication?.connected?.element}>
            {/*
            ====================================
              When the user is connected, they
              should be able to interact with the
              main application (business logic).
              This is where we'll keep the component
              that renderes the crux of our application.
            ====================================
          */}
            <Application />
          </div>
        </Transition>
        <Transition {...styles?.authentication?.disconnecting?.container}>
          <div {...styles?.authentication?.disconnecting?.element}>
            {/*
              ====================================
                When the user logs out, it's not
                an instant process, but an asynchronous
                one so we can choose to show a loader
                here as well, or we can simply put
                our 'application' component as in the `connected`
                state, so that the user doesn't see the lag.
                It's our choice what we want to keep here.
              ====================================
            */}
            <Application />
          </div>
        </Transition>
      </Transition>
    </>
  )
})

export default Home
