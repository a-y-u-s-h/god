function perl6.run () {
  for file in "$@"; do
    perl6 ${file}
  done
  return
}