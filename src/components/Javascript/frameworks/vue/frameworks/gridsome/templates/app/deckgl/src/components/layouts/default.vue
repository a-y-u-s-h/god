<!--
  ======================================
    Skeleton of `layout`
  ======================================
-->

<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<!--
  ======================================
    Behavior associated w/ `layout`
  ======================================
-->

<script>
export default {
  name: "layout",
  components: {},
  props: {},
  data() {
    return {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
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
.layout {
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
