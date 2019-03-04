#!/usr/bin/env bash

#  ======================================
#  
#      /$$$$$$   /$$$$$$  /$$$$$$$
#     /$$__  $$ /$$__  $$| $$__  $$
#    | $$  \__/| $$  \ $$| $$  \ $$
#    | $$ /$$$$| $$  | $$| $$  | $$
#    | $$|_  $$| $$  | $$| $$  | $$
#    | $$  \ $$| $$  | $$| $$  | $$
#    |  $$$$$$/|  $$$$$$/| $$$$$$$/
#     \______/  \______/ |_______/
#     
#  ======================================
#  
#  I create, destroy and modify stuff.
#  With my power, you'll spend your time
#  on stuff that you ought to do. I'll 
#  prevent you from getting caught in the
#  illusion of 'getting things done' by
#  removing away many common things you
#  repeatedly do throughout your life.
#  
#  ======================================

# |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| #
# |~~~~~~\|/~~~~~~\|/~~~~~~\|/~~~~~~\|/~~~~~~\|/~~~~~~\|/~~~~~~\|/~~~~~~~| #
# |                                                                      | #
# |                                                                      | #
# |                     Author  : Ayush Sharma                           | #
# |                     Github  : a-y-u-s-h                              | #
# |                     Website : ayushsharma.net                        | #
# |                     Twitter : @taggosaurus                           | #
# |                                                                      | #
# |                                                                      | #
# |~~~~~~/|\~~~~~~/|\~~~~~~/|\~~~~~~/|\~~~~~~/|\~~~~~~/|\~~~~~~/|\~~~~~~~| #
# |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| #

#  ======================================
#  
#    Declaring some path variables,
#    and importing required scripts.
#    Root path will let scripts obtain
#    files that are relative to them
#    and paste them anywhere on computer.
#    
#  ======================================

local root=$(dirname $0)
source $(dirname $0)/node/node.sh
source $(dirname $0)/react/react.sh
source $(dirname $0)/python/python.sh

# <------------------------------>

function god () {

  #  ======================================
  #  
  #    This is the main wrapper. It 
  #    encompasses functionality of several
  #    scripts such as:
  #    
  #    (*) Custom Scaffolding Scripts:
  #        - React Project.   (react.project   || -c.react.a)
  #        - React Component. (react.component || -c.js.rc)
  #        - Node App.        (node.app        || -c.js.na)
  #        
  #  ======================================
  
  if [[ $1 == "create" || $1 == "-c" ]]; then  
    if [[ $2 == "react.app" || $2 == "react.a" ]]; then
      react.app ${root}/react ${@:3}
    fi

    if [[ $2 == "react.component" || $2 == "react.c" ]]; then
      react.component ${root}/react ${@:3}
    fi

    if [[ $2 == "node.app" || $2 == "node.a" ]]; then
      node.app ${root}/node ${@:3}
    fi

    if [[ $2 == "python.app" || $2 == "py.a" ]]; then
      python.app ${root}/python ${@:3}
    fi
  fi

  return
}