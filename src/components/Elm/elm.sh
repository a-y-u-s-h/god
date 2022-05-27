function elm.run () {
  if [[ (${file} == "." && `ls -1 *.elm 2>/dev/null | wc -l` != 0) ]]; then
    elm reactor >/dev/null 2>&1
  fi
  return
}

function elm.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    elm make ${filename}.elm --output ${filename}.js
  done
  return
}
