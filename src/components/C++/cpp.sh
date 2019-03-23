function cpp.run () {
  for file in "$@"; do
    g++ ${file} -o ${file}.o
    ./${file}.o
    rm -rvf ${file}.o >/dev/null 2>&1
  done
  return
}

function cpp.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    g++ ${file} -o ${filename}
  done  
  return
}