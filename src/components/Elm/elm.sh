function elm.run () {
  elm reactor
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