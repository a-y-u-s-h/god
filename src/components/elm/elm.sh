function elm.run () {
  for file in "$@"; do
    elm ${file}
  done
  return
}