function cpp.run () {
  for file in "$@"; do
    g++ ${file} -o ${file}.o
    ./${file}.o
    rm -rvf ${file}.o >/dev/null 2>&1
  done
  return
}