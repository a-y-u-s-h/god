function lisp.run () {
  for file in "$@"; do
    lisp ${file}
  done
  return
}