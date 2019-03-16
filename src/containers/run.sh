#!/usr/bin/env bash

function god.run () {

  #  ======================================
  #    What if you know 25+ languages but 
  #    cannot remember what command to use
  #    when you want to simply a particular
  #    file? Frustrating, right? This is exactly 
  #    the problem that this function tries to solve.
  #    
  #    All you need to do is:
  #    
  #    god run {filename}.{ext} (longer)
  #    god -r {filename}.{ext}  (shorter)
  #    
  #    This function, depending on extension
  #    will run the command that's needed by
  #    the file. All it expects is that it's 
  #    installed.
  #  ======================================

  local root=$1                                               # Take in position of god.sh
  source ${root}/src/components/javascript/node/node.sh       # Import node.sh
  source ${root}/src/components/javascript/react/react.sh     # Import react.sh
  source ${root}/src/components/python/python.sh              # Import python.sh
  source ${root}/src/components/haskell/haskell.sh            # Import haskell.sh
  source ${root}/src/components/julia/julia.sh                # Import julia.sh
  source ${root}/src/components/fortran/fortran.sh            # Import fortran.sh
  source ${root}/src/components/bash/bash.sh                  # Import bash.sh
  shift 1                                                     # shift parameters to left so that arguments become same.

  # <------------------------------>
  
  if [[ $1 == "run" || $1 == "-r" ]]; then
    for file in "${@:2}"; do

      #  ======================================
      #    Extract extension and depending on
      #    it construct further logic.
      #  ======================================
      
      local filename=$(basename -- "${file}")
      local ext="${filename##*.}"
      filename="${filename%.*}"
      
      #  ======================================
      #    Javascript
      #  ======================================
      
      if [[ ${ext} == "js" ]]; then
        node.run ${file}
      fi

      #  ======================================
      #    Python
      #  ======================================
      
      if [[ ${ext} == "py" ]]; then
        python.run ${file}
      fi
      
      #  ======================================
      #    Haskell
      #  ======================================
      
      if [[ ${ext} == "hs" ]]; then
        haskell.run ${file}
      fi

      #  ======================================
      #    Julia
      #  ======================================
      
      if [[ ${ext} == "jl" ]]; then
        julia.run ${file}
      fi

      #  ======================================
      #    Fortran (2003, 1995, 1990)
      #  ======================================
      
      if [[ ${ext} == "f03" || ${ext} == "f95" || ${ext} == "f90" ]]; then
        fortran.run ${file}
      fi

      #  ======================================
      #    Bash
      #  ======================================
      
      if [[ ${ext} == "sh" ]]; then
        bash.run ${file}
      fi

    done
  fi

  return
}