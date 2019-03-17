function scala.run () {
  for file in "$@"; do
    scala ${file}
  done
  return
}