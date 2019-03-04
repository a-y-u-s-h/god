function python.app () {
  local root=$1
  cp -R "${root}/templates/app/" ${@:2}
  return
}