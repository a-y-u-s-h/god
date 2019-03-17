function D.run () {
  for file in "$@"; do
    D ${file}
  done
  return
}