const sketch = service => settings => {
  const { PIXI, application } = settings
  const { parent, width, height } = settings
  const { context, events } = service
  const { send, listen } = events
  listen(e => (context = e?.c))

  application.renderer.resize(width, height)
  application.renderer.resolution = window.devicePixelRatio


  const loop = dt => {}
  application.ticker.add(loop)
}

export default sketch
