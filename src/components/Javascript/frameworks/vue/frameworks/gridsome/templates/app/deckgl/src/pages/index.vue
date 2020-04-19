<!--
  ======================================
    Skeleton of `index`
  ======================================
-->

<template>
  <div class="index">
    <navbar></navbar>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
  <div class="max-w-3xl mx-auto">
    <!-- Content goes here -->
  </div>
</div>
  </div>
</template>

<!--
  ======================================
    Behavior associated w/ `index`
  ======================================
-->

<script>
import navbar from "@/components/elements/navbar"

export default {
  name: "index",
  metaInfo: {
    title: ""
  },
  components: {
    navbar
  },
  props: {},
  data() {
    return {}
  }
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
.index {
  padding: 0;
  margin: 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
