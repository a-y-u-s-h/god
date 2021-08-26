#!/usr/bin/env bash

function god.modify () {

  #  ======================================
  #   In everyday life, you probably want to
  #   modify some file in a certain way. Like
  #   you may want to speed up a video or something
  #   else. This major command will handle all such
  #  ======================================

  local root=$1                                                                # Take in position of god.sh
  for f in $(find ${root}/src/modifiers/ -name "*.sh"); do source $f; done     # Import all .sh files inside modifiers folder.
  shift 1                                                                      # shift parameters to left so that arguments become same.

  # <------------------------------>

  if [[ $1 == "modify" || $1 == "edit" || $1 == "-m" ]]; then

    for environment in "${@:2}"; do

      #  ======================================
      #    Video Editing
      #  ======================================

      if [[ ${environment} == "video" ]]; then
        archlinux.update
      fi
    done
  fi
  return
}
