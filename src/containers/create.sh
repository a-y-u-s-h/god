#!/usr/bin/env bash

function god.create () {

  #  ======================================
  #  
  #    It encompasses functionality of several
  #    creaiton scripts such as:
  #    
  #    (*) Custom Scaffolding Scripts:
  #        - React Project.   (create react.app       || -c react.a)
  #        - React Component. (create react.component || -c react.c)
  #        - Node App.        (create node.app        || -c node.a)
  #        - Node API.        (create node.api        || -c node.api)
  #        - Python App.      (create python.app      || -c python.a)
  #        - Python API.      (create python.api      || -c python.api)
  #        
  #  ======================================
  
  local root=$1                                               # Take in position of god.sh
  source ${root}/src/components/javascript/node/node.sh       # Import node.sh
  source ${root}/src/components/javascript/react/react.sh     # Import react.sh
  source ${root}/src/components/python/python.sh              # Import python.sh
  source ${root}/src/components/julia/julia.sh                # Import julia.sh
  shift 1                                                     # shift parameters to left so that arguments become same.

  # <------------------------------>
  

  if [[ $1 == "create" || $1 == "-c" ]]; then

      #  ======================
      #  
      #       /$$$$$  /$$$$$$
      #    |__  $$ /$$__  $$
      #       | $$| $$  \__/
      #       | $$|  $$$$$$
      #  /$$  | $$ \____  $$
      # | $$  | $$ /$$  \ $$
      # |  $$$$$$/|  $$$$$$/
      #  \______/  \______/
      #      
      #  ======================
        
    if [[ $2 == "react.app" || $2 == "react.a" ]]; then
      local script=${root}/src/components/javascript/react
      react.app ${script} ${@:3}
    fi

    if [[ $2 == "react.component" || $2 == "react.c" ]]; then
      local script=${root}/src/components/javascript/react
      react.component ${script} ${@:3}
    fi

    if [[ $2 == "node.app" || $2 == "node.a" ]]; then
      local script=${root}/src/components/javascript/node 
      node.app ${script} ${@:3}
    fi

    if [[ $2 == "node.api" ]]; then
      local script=${root}/src/components/javascript/node 
      node.api ${script} ${@:3}
    fi

    #  ===============================================================
    #  
    #  /$$$$$$$  /$$     /$$ /$$$$$$$$ /$$   /$$  /$$$$$$  /$$   /$$
    # | $$__  $$|  $$   /$$/|__  $$__/| $$  | $$ /$$__  $$| $$$ | $$
    # | $$  \ $$ \  $$ /$$/    | $$   | $$  | $$| $$  \ $$| $$$$| $$
    # | $$$$$$$/  \  $$$$/     | $$   | $$$$$$$$| $$  | $$| $$ $$ $$
    # | $$____/    \  $$/      | $$   | $$__  $$| $$  | $$| $$  $$$$
    # | $$          | $$       | $$   | $$  | $$| $$  | $$| $$\  $$$
    # | $$          | $$       | $$   | $$  | $$|  $$$$$$/| $$ \  $$
    # |__/          |__/       |__/   |__/  |__/ \______/ |__/  \__/
    # 
    #  ===============================================================
    
    if [[ $2 == "python.app" || $2 == "py.a" ]]; then
      local script=${root}/src/components/python
      python.app ${script} ${@:3}
    fi

    if [[ $2 == "python.api" || $2 == "flask.api" || $2 == "django.api" ]]; then
      local script=${root}/src/components/python
      python.api ${script} $2 ${@:3}
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
      local script=${root}/src/components/julia
      julia.app ${script} ${@:3}
    fi
  fi
  return
}