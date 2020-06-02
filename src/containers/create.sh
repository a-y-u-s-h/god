#!/usr/bin/env bash

function god.create () {

  #  =====================================================================
  #
  #    It encompasses functionality of several
  #    creation scripts such as:
  #
  #    (*) Custom Scaffolding Scripts:
  #
  #       - Javascript:
  #           - React Project.   (create react.app       || -c react.a)
  #           - React Component. (create react.component || -c react.c)
  #           - Node App.        (create node.app        || -c node.a)
  #           - Node API.        (create node.api        || -c node.api)
  #
  #       - Python 3:
  #           - Python App.      (create python.app      || -c python.a)
  #           - Python API.      (create python.api      || -c python.api)
  #
  #  ======================================================================

  local root=$1                                                                # Take in position of god.sh
  for f in $(find ${root}/src/components/ -name "*.sh"); do source $f; done    # Import all .sh files inside component folder.
  shift 1                                                                      # shift parameters to left so that arguments become same.

  # <------------------------------>


  if [[ $1 == "create" || $1 == "-c" || $1 == "::" || $1 == "init" ]]; then

    #  ============================================
    #
    #   /$$$$$$$   /$$$$$$   /$$$$$$  /$$   /$$
    #  | $$__  $$ /$$__  $$ /$$__  $$| $$  | $$
    #  | $$  \ $$| $$  \ $$| $$  \__/| $$  | $$
    #  | $$$$$$$ | $$$$$$$$|  $$$$$$ | $$$$$$$$
    #  | $$__  $$| $$__  $$ \____  $$| $$__  $$
    #  | $$  \ $$| $$  | $$ /$$  \ $$| $$  | $$
    #  | $$$$$$$/| $$  | $$|  $$$$$$/| $$  | $$
    #  |_______/ |__/  |__/ \______/ |__/  |__/
    #
    #  ============================================

    if [[ $2 == "bash.app" || $2 == "sh.a" ]]; then
      local script=${root}/src/components/Bash
      bash.app ${script} ${@:3}
    fi

    #  ===================================================
    #
    #   /$$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$  /$$   /$$
    #  | $$__  $$ /$$__  $$|__  $$__//$$__  $$| $$  | $$
    #  | $$  \ $$| $$  \ $$   | $$  | $$  \__/| $$  | $$
    #  | $$$$$$$ | $$$$$$$$   | $$  | $$      | $$$$$$$$
    #  | $$__  $$| $$__  $$   | $$  | $$      | $$__  $$
    #  | $$  \ $$| $$  | $$   | $$  | $$    $$| $$  | $$
    #  | $$$$$$$/| $$  | $$   | $$  |  $$$$$$/| $$  | $$
    #  |_______/ |__/  |__/   |__/   \______/ |__/  |__/
    #
    #  ===================================================

    if [[ $2 == "batch.app" || $2 == "bat.a" ]]; then
      local script=${root}/src/components/Batch
      batch.app ${script} ${@:3}
    fi

    #  ========================
    #
    #      /$$$$$  /$$$$$$
    #     |__  $$ /$$__  $$
    #        | $$| $$  \__/
    #        | $$|  $$$$$$
    #   /$$  | $$ \____  $$
    #  | $$  | $$ /$$  \ $$
    #  |  $$$$$$/|  $$$$$$/
    #   \______/  \______/
    #
    #  ========================

    if [[ $2 == "react.app" || $2 == "react.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react
      react.app ${script} ${@:3}
    fi

    if [[ $2 == "react.component" || $2 == "react.c" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react
      react.component ${script} ${@:3}
    fi

    if [[ $2 == "react.page" || $2 == "react.p" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react
      react.page ${script} ${@:3}
    fi

    if [[ $2 == "react.native" || $2 == "react.na" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/react.native
      react.native.app ${script} ${@:3}
    fi

    if [[ $2 == "react.native.component" || $2 == "react.nc" || $2 == "rn.c" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/react.native
      react.native.component ${script} ${@:3}
    fi

    if [[ $2 == "react.native.screen" || $2 == "react.ns" || $2 == "rn.s" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/react.native
      react.native.screen ${script} ${@:3}
    fi

    if [[ $2 == "react.test" || $2 == "react.t" || $2 == "react.unit.test" || $2 == "react.ut" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react
      react.test ${script} ${@:3}
    fi
    # <------------------------------>

    if [[ $2 == "gatsby.app" || $2 == "gatsby.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.app ${script} default ${@:3}
    fi

    if [[ $2 == "gatsby.desktop" || $2 == "electron.gatsby" || $2 == "electron.react" || $2 == "electron.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.app ${script} desktop ${@:3}
    fi

    if [[ $2 == "gatsby.component" || $2 == "gatsby.c" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.component ${script} default ${@:3}
    fi

    if [[ $2 == "gatsby.template" || $2 == "gatsby.t" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.component ${script} template ${@:3}
    fi

    if [[ $2 == "gatsby.content" || $2 == "gatsby.data" || $2 == "gatsby.article" || $2 == "gatsby.a" || $2 == "gatsby.d" || $2 == "gatsby.co"  ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.content ${script} default ${@:3}
    fi

    if [[ $2 == "gatsby.cp5" || $2 == "gatsby.p5" || $2 == "gatsby.p5c" || $2 == "gatsby.componentp5" ]]; then
      local script=${root}/src/components/Javascript/frameworks/react/frameworks/gatsby
      gatsby.p5 ${script} p5 ${@:3}
    fi

    # <------------------------------>

    if [[ $2 == "vue.app" || $2 == "vue.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue
      vue.app ${script} ${@:3}
    fi

    if [[ $2 == "vue.component" || $2 == "vue.c" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue
      vue.component ${script} ${@:3}
    fi

    if [[ $2 == "vue.container" || $2 == "vue.C" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue
      vue.container ${script} ${@:3}
    fi

    if [[ $2 == "vue.p5" || $2 == "vue.sketch" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue
      vue.p5 ${script} ${@:3}
    fi

    # <------------------------------>

    if [[ $2 == "gridsome.app" || $2 == "gridsome.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue/frameworks/gridsome
      gridsome.app ${script} default ${@:3}
    fi

    if [[ $2 == "gridsome.component" || $2 == "gridsome.c" ]]; then
      local script=${root}/src/components/Javascript/frameworks/vue/frameworks/gridsome
      gridsome.component ${script} ${@:3}
    fi

    # <------------------------------>

    if [[ $2 == "node.app" || $2 == "node.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.app ${script} ${@:3}
    fi

    if [[ $2 == "node.cli" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.cli ${script} ${@:3}
    fi

    if [[ $2 == "node.automation" || $2 == "node.auto" || $2 == "node.scraper" || $2 == "web.automation" || $2 == "web.scraper" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.automation ${script} ${@:3}
    fi

    if [[ $2 == "node.library" || $2 == "node.lib" || $2 == "npm.package" || $2 == "npm.a" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.library ${script} ${@:3}
    fi

    if [[ $2 == "node.api" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.api ${script} ${@:3}
    fi

    if [[ $2 == "node.api.resource" || $2 == "api.resource" || $2 == "node.api.r" || $2 == "api.r" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.api.resource ${script} public ${@:3}
    fi

    if [[ $2 == "node.api.resource.private" || $2 == "api.resource.private" || $2 == "node.api.r.p" || $2 == "api.rp" || $2 == "api.r.p" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.api.resource ${script} private ${@:3}
    fi

    if [[ $2 == "node.test" || $2 == "node.test.unit" || $2 == "node.unit.test" || $2 == "node.test.u" || $2 == "node.jest.test" || $2 == "jest.test" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.jest.test ${script} ${@:3}
    fi

    if [[ $2 == "node.test.e2e" || $2 == "node.test.e" || $2 == "node.e2e.test" || $2 == "node.test.end2end" || $2 == "node.cypress.test" || $2 == "cypress.test" ]]; then
      local script=${root}/src/components/Javascript/frameworks/node
      node.cypress.test ${script} ${@:3}
    fi

    # <------------------------------>

    if [[ $2 == "p5.app" || $2 == "p5.experiment" ]]; then
      local script=${root}/src/components/Javascript/projects/p5
      p5.app ${script} default ${@:3}
    fi

    # <------------------------------>

    if [[ $2 == "documentation.app" || $2 == "docs" || $2 == "documentation" || $2 == "docs.app" ]]; then
      local script=${root}/src/components/Javascript/projects/documentation
      documentation.app ${script} default ${@:3}
    fi

    #  ==================================================
    #
    #      /$$$$$ /$$   /$$ /$$       /$$$$$$  /$$$$$$
    #     |__  $$| $$  | $$| $$      |_  $$_/ /$$__  $$
    #        | $$| $$  | $$| $$        | $$  | $$  \ $$
    #        | $$| $$  | $$| $$        | $$  | $$$$$$$$
    #   /$$  | $$| $$  | $$| $$        | $$  | $$__  $$
    #  | $$  | $$| $$  | $$| $$        | $$  | $$  | $$
    #  |  $$$$$$/|  $$$$$$/| $$$$$$$$ /$$$$$$| $$  | $$
    #   \______/  \______/ |________/|______/|__/  |__/
    #
    #  ==================================================

    if [[ $2 == "julia.app" || $2 == "py.a" ]]; then
      local script=${root}/src/components/Julia
      julia.app ${script} ${@:3}
    fi

    #  ===============================================================
    #
    #   /$$$$$$$  /$$     /$$ /$$$$$$$$ /$$   /$$  /$$$$$$  /$$   /$$
    #  | $$__  $$|  $$   /$$/|__  $$__/| $$  | $$ /$$__  $$| $$$ | $$
    #  | $$  \ $$ \  $$ /$$/    | $$   | $$  | $$| $$  \ $$| $$$$| $$
    #  | $$$$$$$/  \  $$$$/     | $$   | $$$$$$$$| $$  | $$| $$ $$ $$
    #  | $$____/    \  $$/      | $$   | $$__  $$| $$  | $$| $$  $$$$
    #  | $$          | $$       | $$   | $$  | $$| $$  | $$| $$\  $$$
    #  | $$          | $$       | $$   | $$  | $$|  $$$$$$/| $$ \  $$
    #  |__/          |__/       |__/   |__/  |__/ \______/ |__/  \__/
    #
    #  ===============================================================

    if [[ $2 == "python.app" || $2 == "py.a" || $2 == "python.a" ]]; then
      local script=${root}/src/components/Python
      python.app ${script} ${@:3}
    fi

    if [[ $2 == "python.api" || $2 == "flask.api" || $2 == "django.api" ]]; then
      local script=${root}/src/components/Python
      python.api ${script} $2 ${@:3}
    fi

    #  ================================
    #
    #    /$$$$$$  /$$$$$$$$ /$$$$$$
    #   /$$__  $$|__  $$__//$$__  $$
    #  | $$  \__/   | $$  |__/  \ $$
    #  |  $$$$$$    | $$     /$$$$$/
    #   \____  $$   | $$    |___  $$
    #   /$$  \ $$   | $$   /$$  \ $$
    #  |  $$$$$$/   | $$  |  $$$$$$/
    #   \______/    |__/   \______/
    #
    #  ================================

    if [[ $2 == "snippet.pack" || $2 == "snippets" ]]; then
      local script="${root}/src/components/Snippets"
      snippet.pack ${script} ${@:3}
    fi

    if [[ $2 == "snippet" || $2 == "snippet.file" ]]; then
      local script="${root}/src/components/Snippets"
      snippet.file ${script} ${@:3}
    fi



  fi
  return
}
