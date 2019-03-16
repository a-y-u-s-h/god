function haskell.run () {
  for file in "$@"; do
    runhaskell ${file}
  done
  return
}