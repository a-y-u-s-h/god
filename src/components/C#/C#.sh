function C#.run () {
  for file in "$@"; do
    local name=$(basename $file)
    mcs -out:$name.exe ${file}
    mono $name.exe
    rm -rvf $name.exe >/dev/null 2>&1
  done
  return
}

function C#.compile () {
  for file in "$@"; do
    local name=$(basename $file)
    mcs -out:$name.exe ${file}
  done
  return
}