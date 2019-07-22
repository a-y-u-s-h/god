import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/layout/pages/home.vue"),
      props: true
    },
    {
      path: "/home",
      redirect: { name: "home" }
    }
  ]
})
