function node.app () {
  local root=$1
  local initial=$(pwd)
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    cd $1
    npm init -y
    cd $initial
  done
  return
}