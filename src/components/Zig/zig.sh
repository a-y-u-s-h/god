function zig.run () {
  for file in "$@"; do
    zig run ${file}
  done
  return
}

function zig.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    ghc ${file} -o ${filename}
    rm -rvf ${filename}.hi >/dev/null 2>&1
  done
  return
}
