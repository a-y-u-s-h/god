#!/usr/bin/env bash

function god.run () {

  #  ======================================
  #  
  #    What if you know 25+ languages but 
  #    cannot remember what command to use
  #    when you want to simply run a particular
  #    file? Frustrating right? This is exactly 
  #    the problem that this function tries to solve.
  #    
  #    All you need to do is:
  #    
  #    god run {filename}.{ext} (longer)
  #    god -r {filename}.{ext}  (shorter)
  #    god -- {filename}.{ext}  (shortest)
  #    
  #    This function, depending on extension
  #    will run the command that's needed by
  #    the file. All it expects is that it's 
  #    installed.
  #    
  #  ======================================

  local root=$1                                                                # Take in position of god.sh
  for f in $(find ${root}/src/components/ -name "*.sh"); do source $f; done    # Import all .sh files inside component folder.
  shift 1                                                                      # shift parameters to left so that arguments become same.

  # <------------------------------>
  
  if [[ $1 == "run" || $1 == "-r" || $1 == "--" ]]; then
    for file in "${@:2}"; do

      #  ======================================
      #    Extract extension and depending on
      #    it construct further logic.
      #  ======================================
      
      local filename=$(basename -- "${file}")
      local ext="${filename##*.}"
      filename="${filename%.*}"
      
      #  ======================================
      #    Bash
      #  ======================================
      
      if [[ ${ext} == "sh" ]]; then
        bash.run ${file}

      #  ======================================
      #    Batch
      #  ======================================
      
      elif [[ ${ext} == "bat" ]]; then
        batch.run ${file}

      #  ======================================
      #    C++
      #  ======================================

      elif [[ ${ext} == "cpp" || ${ext} == "cc" ]]; then
        cpp.run ${file}

      #  ======================================
      #    Clojure
      #  ======================================

      elif [[ ${ext} == "clj" ]]; then
        clojure.run ${file}

      #  ======================================
      #    Crystal
      #  ======================================

      elif [[ ${ext} == "cr" ]]; then
        crystal.run ${file}


      #  ======================================
      #    D
      #  ======================================

      elif [[ ${ext} == "d" ]]; then
        D.run ${file}

      #  ======================================
      #    Dart
      #  ======================================

      elif [[ ${ext} == "dart" ]]; then
        dart.run ${file}

      #  ======================================
      #    Elm
      #  ======================================
      
      elif [[ ${ext} == "elm" || (${file} == "." && `ls -1 *.elm 2>/dev/null | wc -l` != 0) ]]; then
        elm.run ${file}

      #  ======================================
      #    Fortran (2003, 1995, 1990)
      #  ======================================
      
      elif [[ ${ext} == "f03" || ${ext} == "f95" || ${ext} == "f90" ]]; then
        fortran.run ${file}

      #  ======================================
      #    Go
      #  ======================================

      elif [[ ${ext} == "go" ]]; then
        go.run ${file}

      #  ======================================
      #    Haskell
      #  ======================================
      
      elif [[ ${ext} == "hs" ]]; then
        haskell.run ${file}

      #  ======================================
      #    Javascript
      #  ======================================
      
      elif [[ ${ext} == "js" ]]; then
        node.run ${file}

      #  ======================================
      #    Julia
      #  ======================================
      
      elif [[ ${ext} == "jl" ]]; then
        julia.run ${file}

      #  ======================================
      #    Lisp
      #  ======================================
      
      elif [[ ${ext} == "clisp" ]]; then
        lisp.run ${file}  

      #  ======================================
      #    Lua
      #  ======================================
      
      elif [[ ${ext} == "lua" ]]; then
        lua.run ${file}  

      #  ======================================
      #    Nim
      #  ======================================
      
      elif [[ ${ext} == "nim" ]]; then
        nim.run ${file}  

      #  ======================================
      #    Perl6
      #  ======================================
      
      elif [[ ${ext} == "pm6" ]]; then
        perl6.run ${file}  

      #  ======================================
      #    Python
      #  ======================================

      elif [[  ${ext} == "py"  ]]; then
        python.run ${file}        

      #  ======================================
      #    R
      #  ======================================

      elif [[ ${ext} == "R" || ${ext} == "r" ]]; then
        R.run ${file}

      #  ======================================
      #    Ruby
      #  ======================================
      
      elif [[ ${ext} == "rb" ]]; then
        ruby.run ${file}

      #  ======================================
      #    Rust
      #  ======================================
      
      elif [[ ${ext} == "rs" || (${file} == "." && -f "Cargo.toml") ]]; then
        rust.run ${file}

      #  ======================================
      #    Scala
      #  ======================================

      elif [[ ${ext} == "scala" ]]; then
        scala.run ${file}
      fi


    done
  fi

  return
}