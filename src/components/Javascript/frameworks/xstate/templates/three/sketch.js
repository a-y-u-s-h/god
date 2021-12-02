import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export const sketch = payload => {
  let { service, THREE, GSAP } = payload
  let { scene, renderer, camera } = payload
  let { parent, width, height } = payload
  let { context, events } = service
  let { send, listen } = events
  let { settings } = context

  listen(request => (context = request?.context))

  /*
    ======================================
      This is where you start writing your
      THREE.js code. Everything you need
      will be available to you via context.
    ======================================
  */

  const clock = new THREE.Clock()
  const navigation = new OrbitControls(camera, renderer.domElement)
  navigation.enableDamping = true
  camera.position.set(2, 2, 2)

  const loop = () => {
    const t = clock.getElapsedTime()
    /*
      ======================================
        This is where you write your
        custom loop logic.
      ======================================
    */
    navigation.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
  }

  loop()
}

export default sketch
