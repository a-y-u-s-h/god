function bash.run () {
  #  ======================================
  #    Check whether the extension is right,
  #    and if it is, run the file with proper
  #    command.
  #  ======================================
  
  local ext=$1 && shift 1
  if [[ ${ext} == "sh" ]]; then
    for file in "$@"; do
      bash ${file}
    done
  fi
  return
}

function bash.app () {
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      touch $i.sh
      touch README.md
      git init -y  >/dev/null 2>&1
    fi
    cd $initial
  done
  return
}