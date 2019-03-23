function batch.run () {
  wineboot >/dev/null 2>&1
  for file in "$@"; do
    wine cmd /c ${file}
  done
  return
}

function batch.app () {
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      touch $i.bat
      touch README.md
      git init -y  >/dev/null 2>&1
    fi
    cd $initial
  done
  return
}