function node.app () {
  local root=$2
  local initial=$(pwd)
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    cd $i
    npm init -y >/dev/null 2>&1
    echo "Executed    : npm init"
    git init -y >/dev/null 2>&1
    echo "Executed    : git init"
    echo "Installing  : express"
    npm i --save express >/dev/null 2>&1
    echo "Installing  : ejs"
    npm i --save ejs >/dev/null 2>&1
    cd $initial
  done
  return
}

function node.api () {
  local root=$1
  local initial=$(pwd)
  cp -R "${root}/templates/api/" ${@:2}
  for i in ${@:2}; do
    cd $i
    npm init -y >/dev/null 2>&1
    git init -y >/dev/null 2>&1
    cd $initial
  done
  return
}

function node.run () {
  for file in "$@"; do
    node ${file}
  done
  return
}