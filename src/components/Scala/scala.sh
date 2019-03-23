function scala.run () {
  for file in "$@"; do
    scala ${file}
  done
  return
}

function scala.compile () {
  for file in "$@"; do
    local filename=$(basename -- "${file}")
    filename="${filename%.*}"
    scalac ${file}
    echo "Compiled Successfully..."
    echo "Use this command to run: scala ${filename}"
  done  
  return
}