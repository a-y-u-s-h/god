function lua.run () {
  for file in "$@"; do
    lua ${file}
  done
  return
}