#  ============================================
#
#   /$$   /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$
#  | $$$ | $$ /$$__  $$| $$__  $$| $$_____/
#  | $$$$| $$| $$  \ $$| $$  \ $$| $$
#  | $$ $$ $$| $$  | $$| $$  | $$| $$$$$
#  | $$  $$$$| $$  | $$| $$  | $$| $$__/
#  | $$\  $$$| $$  | $$| $$  | $$| $$
#  | $$ \  $$|  $$$$$$/| $$$$$$$/| $$$$$$$$
#  |__/  \__/ \______/ |_______/ |________/
#
#  ============================================



function node.app () {

  #  ======================================
  #
  #    Scaffold a basic opinionated
  #    NodeJS application based on the
  #    template provided.
  #
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i

      local package=`cat ${root}/templates/app/package.json`
      package=$(sed "s/Placeholder/$i/g" <<< "$package")
      package=$(sed "s/placeholder/$i/g" <<< "$package")
      echo $package > package.json

      local webpack=`cat ${root}/templates/app/webpack.config.js`
      webpack=$(sed "s/Placeholder/$i/g" <<< "$webpack")
      webpack=$(sed "s/placeholder/$i/g" <<< "$webpack")
      echo $webpack > webpack.config.js

      yarn init -y
      npx npm-check-updates -u && yarn install
    fi
    cd $initial
  done
  return
}

function node.cli () {

  #  ======================================
  #
  #   Create a CLI application based on
  #   the template provided, and update
  #   the dependencies if they're not already
  #   the newest ones.
  #
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "cli" "${@:3}"
  cp -R "${root}/templates/cli/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      local package=`cat ${root}/templates/cli/package.json`
      local webpack=`cat ${root}/templates/cli/webpack.config.js`
      local application=`cat ${root}/templates/cli/src/settings/application.yaml`

      webpack=$(sed "s/Placeholder/$i/g" <<< "$webpack")
      webpack=$(sed "s/placeholder/$i/g" <<< "$webpack")

      package=$(sed "s/Placeholder/$i/g" <<< "$package")
      package=$(sed "s/placeholder/$i/g" <<< "$package")

      application=$(sed "s/Placeholder/$i/g" <<< "$application")
      application=$(sed "s/placeholder/$i/g" <<< "$application")

      echo $package > package.json
      echo $webpack > webpack.config.js
      echo $application > src/settings/application.yaml
      yarn init -y
      npx npm-check-updates -u && yarn install
    fi
    cd $initial
  done
  return
}

function node.api () {

  #  ======================================
  #
  #    Scaffold a basic api template for Node.
  #    Following things happen:
  #
  #    1. Copy the template 'api'.
  #    2. If user passes no name, use default: 'api'.
  #    3. Execute npm init.
  #    4. Execute git init.
  #
  #  ======================================


  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "api" "${@:3}"
  cp -R "${root}/templates/api/default/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      npm init -y                       >/dev/null 2>&1
      echo "Executed    : npm init"
      git init -y                       >/dev/null 2>&1
      echo "Executed    : git init"
      echo "Installing  : express"
      npm i --save express              >/dev/null 2>&1
    fi
    cd $initial
  done
  return
}

function node.api.resource () {
  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"
    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local index=`cat ${root}/templates/api/components/resource/${type}/index.js`
      local shape=`cat ${root}/templates/api/components/resource/${type}/resource.shape.js`
      local router=`cat ${root}/templates/api/components/resource/${type}/resource.router.js`
      local actions=`cat ${root}/templates/api/components/resource/${type}/resource.actions.js`

      index=$(sed "s/Resource/${file}/g" <<< "$index")
      index=$(sed "s/resource/${folder}/g" <<< "$index")

      shape=$(sed "s/Resource/${file}/g" <<< "$shape")
      shape=$(sed "s/resource/${folder}/g" <<< "$shape")

      router=$(sed "s/Resource/${file}/g" <<< "$router")
      router=$(sed "s/resource/${folder}/g" <<< "$router")

      actions=$(sed "s/Resource/${file}/g" <<< "$actions")
      actions=$(sed "s/resource/${folder}/g" <<< "$actions")


      echo $index > index.js
      echo $shape > $folder.shape.js
      echo $router > $folder.router.js
      echo $actions > $folder.actions.js
    fi
    cd $initial
  done
  return
}

function node.jest.test () {
  local root=$1
  local initial=$(pwd)

  [ -z "$2" ] && set -- "${@:1}" "index" "${@:3}"
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    local test=`cat ${root}/templates/jest/placeholder.test.js`
    test=$(sed "s/Placeholder/${file}/g" <<< "$test")
    test=$(sed "s/placeholder/${folder}/g" <<< "$test")
    echo $test > $folder.test.js

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
