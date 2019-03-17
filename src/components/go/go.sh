function go.run () {
  for file in "$@"; do
    go ${file}
  done
  return
}