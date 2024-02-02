import { useHotkeys } from "react-hotkeys-hook"

export const keybinds = (state, settings) => {
  /*
    ======================================

      ░█░█░█▀▀░█░█░█▀▄░▀█▀░█▀█░█▀▄░█▀▀
      ░█▀▄░█▀▀░░█░░█▀▄░░█░░█░█░█░█░▀▀█
      ░▀░▀░▀▀▀░░▀░░▀▀░░▀▀▀░▀░▀░▀▀░░▀▀▀

      1. layout.next = Ctrl + Shift + Up
      2. layout.prev = Ctrl + Shift + Down
      3. theme.next  = Ctrl + Shift + Right
      4. theme.prev  = Ctrl + Shift + Left

    ======================================
  */

  useHotkeys("ctrl+shift+down", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.layout.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+up", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.layout.events.next()
    element?.focus()
  })

  useHotkeys("ctrl+shift+left", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.theme.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+right", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.theme.events.next()
    element?.focus()
  })

  return {}
}

export default keybinds
