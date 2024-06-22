function cpp.run () {

  #  ======================================
  #    Check whether the extension is right,
  #    and if it is, run the file with proper
  #    command.
  #  ======================================

  local ext=$1 && shift 1
  if [[ ${ext} == "cpp" || ${ext} == "cc" ]]; then
    for file in "$@"; do
      g++ -std=c++20 ${file} -o ${file}.o
      ./${file}.o
      rm -rvf ${file}.o >/dev/null 2>&1
    done
  fi
  return
}

function cpp.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    g++ -std=c++20 ${file} -o ${filename}
  done
  return
}
