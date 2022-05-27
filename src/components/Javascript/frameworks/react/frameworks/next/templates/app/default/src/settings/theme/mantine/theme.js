import System from "@/systems/application"

export const Theme = () => {
  const system = System.global()
  const { settings } = system
  const { theme, layout } = settings

  return {
    defaultProps: {
      /*
        ======================================
          Specify defaultProps for Mantine UI
          in this object. You can specify `className`
          as well here if the component doesn't contain
          `classNames` property.
        ======================================
      */
      Container: {
        fluid: true,
        className: `
          w-full h-full overflow-hidden
          min-w-full min-h-full
          p-0 m-0
        `
      },
      Center: {
        className: `
          w-full h-full overflow-hidden
          min-w-full min-h-full
          p-0 m-0
        `
      }
    },
    classNames: {
      /*
        ======================================
          Specify classNames for Mantine UI
          components in this object. You cannot
          specify this property for components that
          only have a `className`, but you can do that
          in defaultProps.
        ======================================
      */
    }
  }
}

export default Theme
