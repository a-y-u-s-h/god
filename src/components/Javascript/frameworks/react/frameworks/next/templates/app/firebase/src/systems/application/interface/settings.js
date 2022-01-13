export const settings = (state, send) => {
  return {
    theme: state?.value?.interface?.theme,
    layout: state?.value?.interface?.layout,
    user: {
      object: state?.context?.user,
      state: {
        connected: state.matches("user.authentication.connected"),
        connecting: state.matches("user.authentication.connecting"),
        disconnected: state.matches("user.authentication.disconnected"),
        disconnecting: state.matches("user.authentication.disconnecting")
      },
      data: {
        address: state?.context?.user?.attributes?.accounts?.[0]
      },
      events: {
        connect: {
          regular: e => send({ type: "sign.in", payload: e }),
          socially: e => send({ type: "sign.in.social", payload: e }),
          anonymously: e => send({ type: "sign.in.anonymous", payload: e }),
          register: e => send({ type: "sign.up", payload: e })
        },
        disconnect: e => send({ type: "sign.out", payload: e })
      }
    }
  }
}

export default settings
