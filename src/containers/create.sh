#!/usr/bin/env bash

function god.create () {

  #  =====================================================================
  #  
  #    It encompasses functionality of several
  #    creaiton scripts such as:
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
  

  if [[ $1 == "create" || $1 == "-c" || $1 == "::" ]]; then

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
      local script=${root}/src/components/Javascript/react
      react.app ${script} ${@:3}
    fi

    if [[ $2 == "react.component" || $2 == "react.c" ]]; then
      local script=${root}/src/components/Javascript/react
      react.component ${script} ${@:3}
    fi

    if [[ $2 == "node.app" || $2 == "node.a" ]]; then
      local script=${root}/src/components/Javascript/node 
      node.app ${script} ${@:3}
    fi

    if [[ $2 == "node.pixi.app" || $2 == "pixi.app" || $2 == "pixi.a" ]]; then
      local script=${root}/src/components/Javascript/node 
      node.pixi ${script} ${@:3}
    fi

    if [[ $2 == "node.api" ]]; then
      local script=${root}/src/components/Javascript/node 
      node.api ${script} ${@:3}
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
    
    if [[ $2 == "python.app" || $2 == "py.a" ]]; then
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