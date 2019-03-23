function D.run () {
  for file in "$@"; do
    dmd -run ${file}
  done
  return
}

function D.compile () {
  for file in "$@"; do
    dmd ${file}
  done
  return
}