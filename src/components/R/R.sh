function R.run () {
  for file in "$@"; do
    R ${file}
  done
  return
}