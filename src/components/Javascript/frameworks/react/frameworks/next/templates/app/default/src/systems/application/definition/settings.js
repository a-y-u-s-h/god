export const settings = (state, send) => {
  return {
    /*
      ======================================
        'theme' contains everything you
        need to control and query regarding
        the currently active theme state or value.
        It also contains event handlers related
        to this feature - like choosing dark
        or light theme or cycling to next or
        previous theme and so on...
      ======================================
    */
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
    /*
      ======================================
        'layout' contains everything you
        need to control and query regarding
        the currently active layout state or value.
        It also contains event handlers related
        to this feature - like choosing between
        'standard' and 'scientific' layout or
        cycling between available layouts
        and so on...
      ======================================
    */
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
    }
  }
}

export default settings
