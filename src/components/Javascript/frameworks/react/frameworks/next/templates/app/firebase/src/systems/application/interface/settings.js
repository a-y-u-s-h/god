export const settings = (state, send) => {
  return {
    theme: {
      value: state?.value?.interface?.theme,
      state: {
        dark: state.matches("interface.theme.dark"),
        light: state.matches("interface.theme.light")
      },
      events: {
        next: e => send({ type: "theme.next" }),
        prev: e => send({ type: "theme.prev" }),
        choose: {
          dark: e => send({ type: "theme.choose.dark" }),
          light: e => send({ type: "theme.choose.light" })
        }
      }
    },
    layout: {
      value: state?.value?.interface?.layout,
      state: {
        standard: state.matches("interface.layout.standard"),
        scientific: state.matches("interface.layout.scientific")
      },
      events: {
        next: e => send({ type: "layout.next" }),
        prev: e => send({ type: "layout.prev" }),
        choose: {
          standard: e => send({ type: "layout.choose.standard" }),
          scientific: e => send({ type: "layout.choose.scientific" })
        }
      }
    },
    user: {
      object: state?.context?.user,
      state: {
        connected: state.matches("user.authentication.connected"),
        connecting: state.matches("user.authentication.connecting"),
        disconnected: state.matches("user.authentication.disconnected"),
        disconnecting: state.matches("user.authentication.disconnecting")
      },
      data: {},
      events: {
        connect: e => send({ type: "sign.in.social", payload: e }),
        disconnect: e => send({ type: "sign.out", payload: e })
      }
    }
  }
}

export default settings
