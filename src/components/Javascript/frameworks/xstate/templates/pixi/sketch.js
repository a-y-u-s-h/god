const sketch = service => payload => {
  const { PIXI, application } = payload
  const { parent, width, height } = payload
  const { context, events } = service
  const { send, listen } = events
  listen(request => (context = request?.context))

  /*
    ======================================
      This is where you begin writing
      PIXI.js code. You can make use
      of current context of the statechart.
      It'll update automatically.
    ======================================
  */
  const loop = dt => {}
  application.ticker.add(loop)
}

export default sketch
