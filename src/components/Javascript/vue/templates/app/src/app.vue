<!--
  ======================================
    Root container: `app`
  ======================================
-->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!--
  ======================================
    Behavior associated w/ `app`
  ======================================
-->

<script>
export default {
  name: "app",
  components: {}
}
</script>

<!--
  ======================================
    Root container styles
  ======================================
-->

<style scoped lang="scss">
html,
body {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
