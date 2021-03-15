function C#.run () {

  #  ======================================
  #    Check whether the extension is right,
  #    and if it is, run the file with proper
  #    command.
  #  ======================================
  
  local ext=$1 && shift 1
  if [[ ${ext} == "cs" ]]; then
    for file in "$@"; do
      local name=$(basename $file)
      mcs -out:$name.exe ${file}
      mono $name.exe
      rm -rvf $name.exe >/dev/null 2>&1
    done
  fi
  return
}

function C#.compile () {
  for file in "$@"; do
    local name=$(basename $file)
    mcs -out:$name.exe ${file}
  done
  return
}