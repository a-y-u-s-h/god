export const settings = (state, send) => {
  return {
    theme: state?.value?.interface?.theme,
    layout: state?.value?.interface?.layout,
    user: {
      object: state?.context?.user,
      state: {
        connected: state.matches("user.authentication.signed in"),
        connecting: state.matches("user.authentication.connecting"),
        disconnected: state.matches("user.authentication.disconnecting"),
        disconnecting: state.matches("user.authentication.signed in")
      },
      data: {
        address: state?.context?.user?.attributes?.accounts?.[0]
      },
      events: {
        connect: e => send({ type: "connect.wallet" }),
        disconnect: e => send({ type: "disconnect.wallet" })
      }
    },
    content: {
      navigation: {
        networks: {
          selected: state?.context?.network?.selected || 0,
          options: [
            {
              id: "ethereum",
              label: "Ethereum",
              icon: {
                alt: "ethereum",
                width: 18,
                height: 18,
                name: "ethereum",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  send({ type: "network.select", payload: 0 })
                  close()
                }
              })
            },
            {
              id: "solana",
              label: "Solana",
              icon: {
                alt: "solana",
                width: 18,
                height: 18,
                name: "solana",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  send({ type: "network.select", payload: 1 })
                  close()
                }
              })
            },
            {
              id: "polygon",
              label: "Polygon",
              icon: {
                alt: "matic",
                width: 18,
                height: 18,
                name: "matic",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  send({ type: "network.select", payload: 2 })
                  close()
                }
              })
            }
          ]
        },
        menu: [
          {
            label: `${state?.value?.interface?.theme === "light" ? "Dark Theme" : "Light Theme"}`,
            icon: {
              name: `${state?.value?.interface?.theme === "light" ? "BsMoon" : "BsBrightnessHigh"}`,
              family: "BS"
            },
            props: close => ({
              onClick: e => {
                send({ type: "theme.next" })
              }
            })
          }
        ],
        wallet: {
          options: [
            {
              label: "MetaMask",
              icon: {
                name: "metamask",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  const payload = { provider: null }
                  send({ type: "connect.wallet", payload })
                  close()
                }
              })
            },
            {
              label: "WalletConnect",
              icon: {
                width: "24px",
                height: "24px",
                name: "walletconnect",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  const payload = { provider: "walletconnect" }
                  send({ type: "connect.wallet", payload })
                  close()
                }
              })
            },
            {
              label: "Coinbase Wallet",
              icon: {
                name: "coinbasewallet",
                family: "SVG"
              },
              props: close => ({
                onClick: e => {
                  const payload = { provider: "coinbasewallet" }
                  send({ type: "connect.wallet", payload })
                  close()
                }
              })
            }
          ]
        }
      },
      sections: {}
    }
  }
}

export default settings
