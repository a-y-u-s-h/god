function odin.run () {

  #  ======================================
  #    Check whether the extension is right,
  #    and if it is, run the file with proper
  #    command.
  #  ======================================

  local ext=$1 && shift 1
  if [[ ${ext} == "odin" ]]; then
    for file in "$@"; do
      local filename="${file%.*}"
      odin run "${file}" -file
      rm -rvf "${filename}" >/dev/null 2>&1
    done
  fi
  return
}

function odin.compile () {

  #  ======================================
  #    Check whether extension is right,
  #    and if it is, compile the file
  #    with proper command and keep the
  #    name of the binary same as the file.
  #  ======================================

  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    odin build ${file} -o ${filename}
  done
  return
}
