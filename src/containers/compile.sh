#!/usr/bin/env bash

function god.compile () {

  #  ======================================
  #  
  #    What if you know 25+ languages but 
  #    cannot remember what command to use
  #    when you want to simply compile a particular
  #    file? Frustrating, right? This is exactly 
  #    the problem that this function tries to solve.
  #    
  #    All you need to do is:
  #    
  #    god compile {filename}.{ext} (longer)
  #    god == {filename}.{ext}      (shorter)
  #    
  #    This function, depending on extension
  #    will compile the command that's needed by
  #    the file. All it expects is that it's 
  #    installed.
  #    
  #    Languages included below are the ones that 
  #    support compilation:
  #    
  #    1)   C++
  #    2)   Clojure
  #    3)   Crystal
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
  
  if [[ $1 == "compile" || $1 == "==" ]]; then
    for file in "${@:2}"; do

      #  ======================================
      #    Extract extension and depending on
      #    it construct further logic.
      #  ======================================
      
      local filename=$(basename -- "${file}")
      local ext="${filename##*.}"
      filename="${filename%.*}"
      
      #  ======================================
      #    C++
      #  ======================================

      if [[ ${ext} == "cpp" || ${ext} == "cc" ]]; then
        cpp.compile ${file}

      #  ======================================
      #    Clojure
      #  ======================================

      elif [[ ${ext} == "clj" ]]; then
        clojure.compile ${file}

      #  ======================================
      #    Crystal
      #  ======================================

      elif [[ ${ext} == "cr" ]]; then
        crystal.compile ${file}

      #  ======================================
      #    D
      #  ======================================

      elif [[ ${ext} == "d" ]]; then
        D.compile ${file}

      #  ======================================
      #    Dart
      #  ======================================

      elif [[ ${ext} == "dart" ]]; then
        dart.compile ${file}

      #  ======================================
      #    Elm
      #  ======================================
      
      elif [[ ${ext} == "elm" || (${file} == "." && `ls -1 *.elm 2>/dev/null | wc -l` != 0) ]]; then
        elm.compile ${file}

      #  ======================================
      #    Fortran (2003, 1995, 1990)
      #  ======================================
      
      elif [[ ${ext} == "f03" || ${ext} == "f95" || ${ext} == "f90" ]]; then
        fortran.compile ${file}

      #  ======================================
      #    Go
      #  ======================================

      elif [[ ${ext} == "go" ]]; then
        go.compile ${file}

      #  ======================================
      #    Haskell
      #  ======================================
      
      elif [[ ${ext} == "hs" ]]; then
        haskell.compile ${file}

      #  ======================================
      #    Julia
      #  ======================================
      
      elif [[ ${ext} == "jl" ]]; then
        julia.compile ${file}

      #  ======================================
      #    Lisp
      #  ======================================
      
      elif [[ ${ext} == "clisp" ]]; then
        lisp.compile ${file}  

      #  ======================================
      #    Nim
      #  ======================================
      
      elif [[ ${ext} == "nim" ]]; then
        nim.compile ${file}  

      #  ======================================
      #    Rust
      #  ======================================
      
      elif [[ ${ext} == "rs" || (${file} == "." && -f "Cargo.toml") ]]; then
        rust.compile ${file}

      #  ======================================
      #    Scala
      #  ======================================

      elif [[ ${ext} == "scala" ]]; then
        scala.compile ${file}

      fi
    done
  fi
  return
}