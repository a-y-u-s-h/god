import Vue from "vue"
import app from "@/app.vue"
import store from "@/plugins/store"
import router from "@/plugins/router"

import "@/plugins/misc/globals"
import "@/plugins/misc/service.worker"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app")
