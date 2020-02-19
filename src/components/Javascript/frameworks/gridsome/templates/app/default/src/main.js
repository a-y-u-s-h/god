/*
  ======================================
    Use this file to import global styles
    and global scripts. Client API can
    be used here. More about this here:

    Learn more: gridsome.org/docs/client-api
  ======================================
*/
import "@/assets/styles/index.scss"

import layout from "@/components/layouts/default.vue"

export default function(Vue, { router, head, isClient }) {
  /*
    ======================================
      Registering default layout as a
      globally available component.
    ======================================
  */
  Vue.component("layout", layout)
}
