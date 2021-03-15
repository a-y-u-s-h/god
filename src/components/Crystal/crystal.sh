function crystal.run () {
  for file in "$@"; do
    crystal ${file}
  done
  return
}