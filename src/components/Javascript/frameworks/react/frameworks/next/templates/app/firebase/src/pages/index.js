import React from "react"
import System from "@/systems/application"
import { Transition } from "@headlessui/react"
import Loading from "@/components/molecules/loading"
import Marketing from "@/components/universe/marketing"
import Application from "@/components/universe/application"

export const Home = () => {
  const system = System.global()
  const { state, settings } = system
  const { theme, layout, user } = settings

  /*
    ======================================
      Home basically acts as the basic
      router. It renders the marketing
      page and app depending on whether user
      is connected or not. You can make it
      do more, but for normal applications it's
      not needed. `styles` for home contains
      transition logic based on authentication state.
    ======================================
  */
  const styles = {
    container: {
      as: "div",
      show: true,
      className: `w-full h-full overflow-hidden`
    },
    authentication: {
      disconnected: {
        container: {
          as: "div",
          appear: true,
          show: user?.state?.disconnected,
          enter: "ease-out transition-opacity duration-75",
          enterFrom: "z-0 opacity-75",
          enterTo: "z-10 opacity-100",
          leave: "ease-in transition-opacity duration-75",
          leaveFrom: "z-10 opacity-100",
          leaveTo: "z-0 opacity-75",
          className: "w-full h-full overflow-hidden"
        },
        element: {
          className: `w-full h-full overflow-hidden`
        }
      },
      connecting: {
        container: {
          as: "div",
          appear: true,
          show: user?.state?.connecting,
          enter: "ease-out transition-opacity duration-75",
          enterFrom: "z-0 opacity-75",
          enterTo: "z-10 opacity-100",
          leave: "ease-in transition-opacity duration-75",
          leaveFrom: "z-10 opacity-100",
          leaveTo: "z-0 opacity-75",
          className: "w-full h-full overflow-hidden"
        },
        element: {
          className: `w-full h-full overflow-hidden`
        }
      },
      connected: {
        container: {
          as: "div",
          appear: true,
          show: user?.state?.connected,
          enter: "ease-out transition-opacity duration-75",
          enterFrom: "z-0 opacity-75",
          enterTo: "z-10 opacity-100",
          leave: "ease-in transition-opacity duration-75",
          leaveFrom: "z-10 opacity-100",
          leaveTo: "z-0 opacity-75",
          className: "w-full h-full overflow-hidden"
        },
        element: {
          className: `w-full h-full overflow-hidden`
        }
      },
      disconnecting: {
        container: {
          as: "div",
          appear: true,
          show: user?.state?.disconnecting,
          enter: "ease-out transition-opacity duration-75",
          enterFrom: "z-0 opacity-75",
          enterTo: "z-10 opacity-100",
          leave: "ease-in transition-opacity duration-75",
          leaveFrom: "z-10 opacity-100",
          leaveTo: "z-0 opacity-75",
          className: "w-full h-full overflow-hidden"
        },
        element: {
          className: `w-full h-full overflow-hidden`
        }
      }
    }
  }

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
            <Loading.Connecting />
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
            <Loading.Disconnecting />
          </div>
        </Transition>
      </Transition>
    </>
  )
}

export default Home
