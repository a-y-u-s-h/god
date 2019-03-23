function julia.app () {
  local root=$1
  for i in ${@:2}; do
    cp -R "${root}/templates/app/" $i  
  done
  return
}

# <------------------------------>


function julia.run () {
  for file in "$@"; do
    julia ${file}
  done
  return
}