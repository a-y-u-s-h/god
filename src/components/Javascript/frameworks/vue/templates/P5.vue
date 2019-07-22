<!--
  ======================================
    Skeleton of `Placeholder`
  ======================================
-->

<template>
  <div class="p5" :id="id"></div>
</template>

<!--
  ======================================
    Behavior associated w/ `Placeholder`
  ======================================
-->

<script>
const p5 = require("p5")

export default {
  name: "Placeholder",
  components: {},
  props: {
    id: {
      type: String,
      required: true,
      default: "Placeholder"
    }
  },
  data() {
    return {}
  },
  methods: {
    sketch(s) {
      s.setup = () => {
        let canvas = s.createCanvas(this.width, this.height)
        canvas.parent(this.id)
        s.angleMode(s.DEGREES)
        s.noFill()
        s.rectMode(s.CENTER)
        s.ellipseMode(s.CENTER)
        s.textAlign(s.CENTER, s.CENTER)
      }

      s.draw = () => {}

      s.windowResized = () => {
        s.setup()
      }
    }
  },
  computed: {
    container() {
      return document.getElementById(this.id)
    },
    width() {
      return this.container.offsetWidth
    },
    height() {
      return this.container.offsetHeight
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    new p5(this.sketch)
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>

<!--
  ======================================
    Appearance of this component is
    described below in SCSS/CSS. 
     
    -> 'scoped' attribute ensures 
    that this style is applied only 
    to this component.
  ======================================
-->

<style scoped lang="scss">
.p5 {
  padding: 0;
  margin: 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
