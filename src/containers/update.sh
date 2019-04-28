#!/usr/bin/env bash

function god.update () {

  #  ======================================
  #  
  #    What if you know several environments but 
  #    cannot remember what command to use
  #    when you want to simply update a particular
  #    environment? Frustrating, right? This is exactly 
  #    the problem that this function tries to solve.
  #    
  #    All you need to do is:
  #    
  #    god update {environment}     (longer)
  #    god -.- {environment}        (shorter)
  #    
  #    This function, depending on environment
  #    will update the environment by picking
  #    it's update commands. 
  #    All it expects is that it's installed.
  #    
  #    Supported Environments:
  #    
  #    1)   Everything
  #    2)   Javascript
  #    3)   Python 3
  #    4)   D
  #    5)   Dart
  #    6)   Elm
  #    7)   Fortran
  #    8)   Go
  #    9)   Haskell
  #    10)  Julia
  #    11)  CLisp
  #    12)  Nim
  #    13)  Rust
  #    14)  Scala
  #    
  #  ======================================

  local root=$1                                                                # Take in position of god.sh
  for f in $(find ${root}/src/components/ -name "*.sh"); do source $f; done    # Import all .sh files inside component folder.
  shift 1                                                                      # shift parameters to left so that arguments become same.

  # <------------------------------>
  
  if [[ $1 == "update" || $1 == "!" || $1 == "-u" ]]; then

    #  ======================================
    #    Everything
    #  ======================================

    if [[ -z "$2" || $2 == "everything" || $2 == "all" ]] then
        archlinux.update
        python.update
        javascript.update
    fi

    for environment in "${@:2}"; do
      
      #  ======================================
      #    Arch Linux
      #  ======================================

      if [[ ${environment} == "arch" || ${environment} == "archlinux" ]]; then
        archlinux.update

      #  ======================================
      #    Python 3
      #  ======================================

      elif [[ ${environment} == "python" || ${environment} == "python3" || ${environment} == "py" ]]; then
        python.update

      #  ======================================
      #    Javascript
      #  ======================================

      elif [[ ${environment} == "js" || ${environment} == "javascript" ]]; then
        javascript.update

      #  ======================================
      #    D
      #  ======================================

      elif [[ ${environment} == "d" ]]; then
        D.update

      #  ======================================
      #    Dart
      #  ======================================

      elif [[ ${environment} == "dart" ]]; then
        dart.update

      #  ======================================
      #    Elm
      #  ======================================
      
      elif [[ ${environment} == "elm" || (${environment} == "." && `ls -1 *.elm 2>/dev/null | wc -l` != 0) ]]; then
        elm.update

      #  ======================================
      #    Fortran (2003, 1995, 1990)
      #  ======================================
      
      elif [[ ${environment} == "f03" || ${environment} == "f95" || ${environment} == "f90" ]]; then
        fortran.update

      #  ======================================
      #    Go
      #  ======================================

      elif [[ ${environment} == "go" ]]; then
        go.update

      #  ======================================
      #    Haskell
      #  ======================================
      
      elif [[ ${environment} == "hs" ]]; then
        haskell.update

      #  ======================================
      #    Julia
      #  ======================================
      
      elif [[ ${environment} == "jl" ]]; then
        julia.update

      #  ======================================
      #    Lisp
      #  ======================================
      
      elif [[ ${environment} == "clisp" ]]; then
        lisp.update  

      #  ======================================
      #    Nim
      #  ======================================
      
      elif [[ ${environment} == "nim" ]]; then
        nim.update  

      #  ======================================
      #    Rust
      #  ======================================
      
      elif [[ ${environment} == "rs" || (${environment} == "." && -f "Cargo.toml") ]]; then
        rust.update

      #  ======================================
      #    Scala
      #  ======================================

      elif [[ ${environment} == "scala" ]]; then
        scala.update

      fi
    done
  fi
  return
}