function R.run () {
  for file in "$@"; do
    Rscript ${file}
  done
  return
}