import * as X from "xstate"

export const options = {
  actions: {
    "log.errors": console.error,
    "log.info": console.log,
    "api.initialize": X.assign({
      api: (c, e) => {
        /*
          ======================================
            Initializes Moralis variable, you'll
            need to put server url and application id
            in the context for this to work.
          ======================================
        */
        const Moralis = require("moralis")
        const options = { ...c?.settings?.moralis }
        Moralis.start(options)
        Moralis.initPlugins()
        return { ...c?.api, Moralis }
      }
    }),
    /*
      ======================================
        This is where we specify simple
        assignment actions (eg. user, network, etc.)
      ======================================
    */
    "network.change": X.assign({
      network: (c, e) => e?.payload || e?.data
    }),
    "assign.user": X.assign({
      user: (c, e) => e?.data
    })
  },
  activities: {},
  services: {
    "user.observer": (c, e) => (send, listen) => {
      /*
        ======================================
          We'll make sure that we take the
          correct transitions when user connects,
          disconnects, changes accounts or changes
          their network over here by tracking their
          behavior and notifying the UI of these events.
        ======================================
      */
      const Moralis = c?.api?.Moralis
      const unsubscribe = {
        chain: Moralis.onChainChanged(e => send({ type: "network.changed", payload: e })),
        account: Moralis.onAccountChanged(e => send({ type: "account.changed", payload: e })),
        connection: Moralis.onWeb3Enabled(e => send({ type: "account.connected", payload: e })),
        disconnection: Moralis.onWeb3Deactivated(e => send({ type: "account.disconnected", payload: e }))
      }
      return () => Object.keys(unsubscribe).forEach(key => unsubscribe[key]())
    },
    "synchronize.data": (c, e) => (send, listen) => {
      /*
        ======================================
          We want to run the query when the user
          gets connected, and then periodically ever
          after, till the user is connected.
        ======================================
      */
      const Moralis = c?.api?.Moralis
      const queries = {
        empty: () => {},
        user: () => {}
      }
      queries.empty()
      const interval = setInterval(queries.empty, 60000)
      return () => clearInterval(interval)
    },
    "synchronize.network": async (c, e) => {
      /*
        ======================================
          We want to track the changes in network
          at all times. It's not a costly operation
          because the app just has to check the status
          of Metamask which is already on the client side.
          So we can afford to do this on every event.
          But this can be slow when the app uses mouse movements
          or something else - so this can be optimized.
        ======================================
      */
      const Moralis = c?.api?.Moralis
      const id = await Moralis.getChainId()
      return id ? id.toString(16) : null
    },

    "get.current.user": async (c, e) => {
      /*
        ======================================
          Gets current user if they're logged in.
        ======================================
      */
      const Moralis = c?.api?.Moralis
      const network = c?.network
      await Moralis.enableWeb3()
      const user = Moralis.User.current()
      return user ? user : null
    },
    "connect.wallet": async (c, e) => {
      /*
        ======================================
          Connect user's wallet with the app.
          You can change the welcome message
          through `signingMessage` key.
        ======================================
      */
      const provider = e?.payload?.provider
      const Moralis = c?.api?.Moralis
      const network = c?.network
      const message = `Welcome 😋`
      const options = { provider, signingMessage: message }
      const user = Moralis.User.current() ? Moralis.User.current() : await Moralis.Web3.authenticate(options)
      return user
    },
    "disconnect.wallet": async (c, e) => {
      /*
        ======================================
          Disconnects the wallet (logs out).
        ======================================
      */
      const Moralis = c?.api?.Moralis
      const network = c?.network
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
