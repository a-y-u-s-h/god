/*
  ======================================

               /$$                   /$$               /$$
              | $$                  | $$              | $$
      /$$$$$$$| $$   /$$  /$$$$$$  /$$$$$$    /$$$$$$$| $$$$$$$
     /$$_____/| $$  /$$/ /$$__  $$|_  $$_/   /$$_____/| $$__  $$
    |  $$$$$$ | $$$$$$/ | $$$$$$$$  | $$    | $$      | $$  \ $$
     \____  $$| $$_  $$ | $$_____/  | $$ /$$| $$      | $$  | $$
     /$$$$$$$/| $$ \  $$|  $$$$$$$  |  $$$$/|  $$$$$$$| $$  | $$
    |_______/ |__/  \__/ \_______/   \___/   \_______/|__/  |__/

  Note: Before copying and pasting this sketch variable anywhere
  inside any other framework, remember to include the settings
  variable or JSON as well in the app. It lives inside "data/settings.json"
  file in this application. Settings contain the state of the sketch.

  ======================================
*/

const sketch = new p5(s => {
  let settings

  s.preload = () => {
    settings = s.loadJSON("./data/settings.json")
  }

  s.setup = () => {
    const container = document.getElementById(`${settings.sketch.parent.id}`)
    const canvas = s.createCanvas(container.offsetWidth, container.offsetHeight)
    canvas.parent(`${settings.sketch.parent.id}`)
    s.angleMode(s.DEGREES)
    s.noFill()
    s.rectMode(s.CENTER)
    s.ellipseMode(s.CENTER)
  }

  s.draw = () => {}

  s.windowResized = () => {
    s.setup()
  }
})
