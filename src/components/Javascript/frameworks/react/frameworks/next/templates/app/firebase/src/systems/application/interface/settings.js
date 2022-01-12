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
        sigin: e => send({ type: "sign in" })
      }
    }
  }
}

export default settings
