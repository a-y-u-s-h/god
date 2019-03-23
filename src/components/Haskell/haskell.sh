function haskell.run () {
  for file in "$@"; do
    runhaskell ${file}
  done
  return
}

function haskell.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    ghc ${file} -o ${filename}
    rm -rvf ${filename}.hi >/dev/null 2>&1
  done  
  return
}