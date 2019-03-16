function bash.run () {
  for file in "$@"; do
    bash ${file}
  done
  return
}