/*
  =======================================================

                                        ███
                                       ░░░
    ████████   ██████  █████████████   ████  █████ █████
   ░░███░░███ ███░░███░░███░░███░░███ ░░███ ░░███ ░░███
    ░███ ░░░ ░███████  ░███ ░███ ░███  ░███  ░░░█████░
    ░███     ░███░░░   ░███ ░███ ░███  ░███   ███░░░███
    █████    ░░██████  █████░███ █████ █████ █████ █████
   ░░░░░      ░░░░░░  ░░░░░ ░░░ ░░░░░ ░░░░░ ░░░░░ ░░░░░

   This file has a few build and development configuration
   options, but does not actually run on your server. To
   know more about how it works, check remix docs online.

   While you can also configure routes in this configuration,
   we're going to use `routes` folder to do it by default,
   because it helps in co-locating modules, simplifying imports,
   and facilitates automatic code generation, which is good
   to have as application scales.

   Remix's route configuration approach blends convention with
   flexibility. You can use the src/routes folder for an easy,
   organized way to set up your routes. If you want more control,
   dislike the file names, or have unique needs, there's
   remix.config.js. It is expected that many apps forgo the
   routes folder convention in favor of remix.config.js.

  =======================================================
*/

export default {
  appDirectory: "src",
  cacheDirectory: "build/cache",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/assets/",
  assetsBuildDirectory: "build/client",
  serverBuildPath: "build/server/index.js",
  /*
    ======================================

      While the src/routes folder offers a
      convenient convention for developers,
      Remix appreciates that one size doesn't
      fit all. There are times when the
      provided convention might not align with
      specific project requirements or a
      developer's preferences.

      In such cases, Remix allows for manual
      route configuration via remix.config.js.
      This flexibility ensures developers can
      structure their application in a way
      that makes sense for their project. If
      you want to know more about this, search
      for 'Manual Route Configuration' in docs.
      You can do so by adding to following key
      if you need it.

    ======================================
  */
  routes: create => create(route => {})
}
