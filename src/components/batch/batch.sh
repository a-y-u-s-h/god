function batch.run () {
  wineboot >/dev/null 2>&1
  for file in "$@"; do
    wine cmd /c ${file}
  done
  return
}