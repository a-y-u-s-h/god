function nim.run () {
  for file in "$@"; do
    nim ${file}
  done
  return
}