#  ================================================================
#
#     /$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$  /$$$$$$$  /$$     /$$
#    /$$__  $$ /$$__  $$|__  $$__//$$__  $$| $$__  $$|  $$   /$$/
#   | $$  \__/| $$  \ $$   | $$  | $$  \__/| $$  \ $$ \  $$ /$$/
#   | $$ /$$$$| $$$$$$$$   | $$  |  $$$$$$ | $$$$$$$   \  $$$$/
#   | $$|_  $$| $$__  $$   | $$   \____  $$| $$__  $$   \  $$/
#   | $$  \ $$| $$  | $$   | $$   /$$  \ $$| $$  \ $$    | $$
#   |  $$$$$$/| $$  | $$   | $$  |  $$$$$$/| $$$$$$$/    | $$
#    \______/ |__/  |__/   |__/   \______/ |_______/     |__/
#
#  ===============================================================
#
#  Everything that I can automate related to Gatsby.
#
#  1. Gatsby Project Scaffolding (Custom)
#
#  ===============================================================

function gatsby.component () {

  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to
  #    page name inside it.
  #
  #    Also settings.json to keep things neat.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local index=`cat ${root}/templates/component/$type/index.js`
      local store=`cat ${root}/templates/component/$type/component.store.js`
      local style=`cat ${root}/templates/component/$type/component.style.js`
      local types=`cat ${root}/templates/component/$type/component.types.js`

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      store=$(sed "s/Placeholder/${file}/g" <<< "$store")
      store=$(sed "s/placeholder/${folder}/g" <<< "$store")

      style=$(sed "s/Placeholder/${file}/g" <<< "$style")
      style=$(sed "s/placeholder/${folder}/g" <<< "$style")

      types=$(sed "s/Placeholder/${file}/g" <<< "$types")
      types=$(sed "s/placeholder/${folder}/g" <<< "$types")


      echo $index > index.js
      echo $store > ${folder}.store.js
      echo $style > ${folder}.style.js
      echo $types > ${folder}.types.js
    fi
    cd $initial
  done
  return
}

# <------------------------------>


function gatsby.content () {

  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to
  #    page name inside it.
  #
  #    Also settings.json to keep things neat.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      cp -r ${root}/templates/content/${type}/. .
    fi
    cd $initial
  done
  return
}

# <------------------------------>


function gatsby.p5 () {

  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to
  #    page name inside it.
  #
  #    Also settings.json to keep things neat.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local index=`cat ${root}/templates/component/p5/index.js`
      local store=`cat ${root}/templates/component/p5/component.store.js`
      local sketch=`cat ${root}/templates/component/p5/component.sketch.js`
      local types=`cat ${root}/templates/component/p5/component.types.js`

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      store=$(sed "s/Placeholder/${file}/g" <<< "$store")
      store=$(sed "s/placeholder/${folder}/g" <<< "$store")

      sketch=$(sed "s/Placeholder/${file}/g" <<< "$sketch")
      sketch=$(sed "s/placeholder/${folder}/g" <<< "$sketch")

      types=$(sed "s/Placeholder/${file}/g" <<< "$types")
      types=$(sed "s/placeholder/${folder}/g" <<< "$types")


      echo $index > index.js
      echo $store > ${folder}.store.js
      echo $sketch > ${folder}.sketch.js
      echo $types > ${folder}.types.js
    fi
    cd $initial
  done
  return
}

# <------------------------------>

function gatsby.app () {

  #  ======================================
  #    Create a project with `create-gatsby-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      cp -r ${root}/templates/app/${type}/. .

      local package=`cat ${root}/templates/app/${type}/package.json`
      package=$(sed "s/Placeholder/${i}/g" <<< "$package")
      package=$(sed "s/placeholder/${i}/g" <<< "$package")
      echo $package > package.json

      local site=`cat ./src/assets/settings.yaml`
      site=$(sed "s/Placeholder/${i}/g" <<< "$site")
      site=$(sed "s/placeholder/${i}/g" <<< "$site")
      echo $site > ./src/assets/settings.yaml

      yarn init -y
      npx npm-check-updates -u && yarn install
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}
