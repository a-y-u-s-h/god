function ruby.run () {
  for file in "$@"; do
    ruby ${file}
  done
  return
}