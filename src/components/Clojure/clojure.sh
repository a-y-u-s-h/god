function clojure.run () {
  for file in "$@"; do
    clojure ${file}
  done
  return
}