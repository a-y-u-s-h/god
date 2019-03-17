function dart.run () {
  for file in "$@"; do
    dart ${file}
  done
  return
}