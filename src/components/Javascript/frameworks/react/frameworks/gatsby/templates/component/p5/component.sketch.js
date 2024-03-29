/*
  ======================================
    Inside below function you can access
    component's props with: component.props
    and its state with: component.state

    Whenever component's state or props changes,
    the values of component.state and component.prop
    will change, and sketch will update automatically.
  ======================================
*/

export default (container, component) => s => {
  s.setup = () => {
    const canvas = s
      .createCanvas(
        component.state.dimensions.width,
        component.state.dimensions.height
      )
      .parent(container)
    canvas.style("display", "block")
    s.angleMode(s.DEGREES)
    s.colorMode(s.RGB)
    s.rectMode(s.CENTER)
    s.ellipseMode(s.CENTER)
    s.textAlign(s.CENTER, s.CENTER)
  }

  s.draw = () => {
    s.background(component.props.background || 0)
  }

  s.windowResized = () => {
    s.resizeCanvas(
      component.state.dimensions.width,
      component.state.dimensions.height
    )
  }
}
