function fortran.run () {
  for file in "$@"; do
    gfortran ${file} -o ${file}.out
    ./${file}.out
    rm -rvf ${file}.out >/dev/null 2>&1
  done
  return
}