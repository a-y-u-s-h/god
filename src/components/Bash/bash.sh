function bash.run () {
  for file in "$@"; do
    bash ${file}
  done
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