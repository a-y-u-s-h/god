function go.run () {
  for file in "$@"; do
    go run ${file}
  done
  return
}