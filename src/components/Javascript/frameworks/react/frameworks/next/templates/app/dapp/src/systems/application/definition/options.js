import * as X from "xstate"

export const options = {
  actions: {
    "api.initialize": X.assign({
      api: (c, e) => {
        const settings = c?.api?.settings
        const Moralis = require("moralis")
        Moralis.initialize(settings.id)
        Moralis.serverURL = settings.server
        return { ...c?.api, Moralis }
      }
    }),
    "network.select": X.assign({
      network: (c, e) => {
        const selected = e?.payload
        return { selected }
      }
    }),
    "assign.user": X.assign({
      user: (c, e) => e?.data
    })
  },
  activities: {},
  services: {
    "get.current.user": async (c, e) => {
      const Moralis = c?.api?.Moralis
      const user = Moralis.User.current()
      return user ? user : null
    },
    "connect.wallet": async (c, e) => {
      const provider = e?.payload?.provider
      const Moralis = c?.api?.Moralis
      return Moralis.User.current() ? Moralis.User.current() : await Moralis.Web3.authenticate({ provider })
    },
    "disconnect.wallet": async (c, e) => {
      const Moralis = c?.api?.Moralis
      const user = await Moralis.User.logOut()
      return null
    }
  },
  guards: {
    "user.connected": (c, e) => c?.user || e?.data,
    "user.disconnected": (c, e) => !(c?.user || e?.data)
  }
}

export default options
