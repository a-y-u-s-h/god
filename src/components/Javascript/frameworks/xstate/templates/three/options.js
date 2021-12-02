import * as X from "xstate"
import sketch from "./sketch"

/*
  ======================================
    This is a state chart controlled p5
    sketch. The sketch lives in sketch.js
    file, and it gets the context every time
    it updates. So if you want to add any extra
    functionality based on events in p5 sketch,
    you can do so by changing context and then writing
    rendering logic according to it in sketch.js/
  ======================================
*/

export default {
  actions: {
    events: X.send((c, e, m) => ({ context: c, event: e, meta: m }), { to: "activity" }),
    initialize: X.assign({
      container: (c, e) => {
        return c?.container || c?.reference || e?.payload?.container || e?.payload?.reference
      }
    })
  },
  services: {
    sketch: (c, e, m) => (send, listen) => {
      const THREE = require("three")
      const GSAP = require("gsap")
      const events = { send, listen, history: [] }
      const service = { events, context: c }

      /*
        ======================================
          Get the parent, you need to provide
          a DOM element reference for this to work.
        ======================================
      */
      const parent = document.querySelector(c?.container)
      while (parent.firstChild) parent.removeChild(parent.firstChild)
      const width = parent.offsetWidth
      const height = parent.offsetHeight
      /*
        ======================================
          This is where we setup the basics
          of THREE - scene, renderer and camera.
          By default everything is positioned
          at the origin so you need to position these
          things manually later in `sketch`.
        ======================================
      */
      const scene = new THREE.Scene()
      const renderer = new THREE.WebGLRenderer()
      const ratio = width / height
      const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 100)

      scene.add(camera)
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      parent.appendChild(renderer.domElement)
      sketch({ service, THREE, GSAP, scene, renderer, camera, parent, width, height })
      renderer.render(scene, camera)

      /*
        ======================================
          What should happen when you resize?
          It should reset the camera's aspect
          ratio, and then projection matrices.
          It should also reset renderer.
        ======================================
      */
      window.addEventListener("resize", () => {
        const width = parent.offsetWidth
        const height = parent.offsetHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })

      /*
        ======================================
          What happens when you double click
          the canvas element? It should make
          the canvas fullscreen on multiple devices
          and browsers.
        ======================================
      */
      renderer.domElement.addEventListener("dblclick", () => {
        const element = document.fullscreenElement || document.webkitFullscreenElement
        const canvas = renderer.domElement
        element
          ? document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : null
          : canvas.requestFullscreen
          ? canvas.requestFullscreen()
          : canvas.webkitRequestFullscreen
          ? canvas.webkitRequestFullscreen()
          : null
      })

      return () => {
        while (scene.children.length > 0) scene.remove(scene.children[0])
        while (parent.firstChild) parent.removeChild(parent.firstChild)
      }
    }
  },
  activities: {},
  guards: {
    "container.exists": (c, e) => c?.container
  }
}
