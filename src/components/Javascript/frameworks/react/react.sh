#  ======================================================
#
#     /$$$$$$$  /$$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$$$
#    | $$__  $$| $$_____/ /$$__  $$ /$$__  $$|__  $$__/
#    | $$  \ $$| $$      | $$  \ $$| $$  \__/   | $$
#    | $$$$$$$/| $$$$$   | $$$$$$$$| $$         | $$
#    | $$__  $$| $$__/   | $$__  $$| $$         | $$
#    | $$  \ $$| $$      | $$  | $$| $$    $$   | $$
#    | $$  | $$| $$$$$$$$| $$  | $$|  $$$$$$/   | $$
#    |__/  |__/|________/|__/  |__/ \______/    |__/
#
#  ======================================================
#
#  Everything that I can automate related to React.
#
#  1. React Project Scaffolding (Custom)
#  2. React Component Scaffolding (Custom, P5)
#
#  ======================================================

function react.component () {

  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to
  #    component name inside it.
  #
  #    Also props.json to keep things neat.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local component="$(cat ${root}/templates/app/component/defaultjs.js)"
    component=$(sed "s/Placeholder/${file}/g" <<< "$component")
    echo "$store" > store.js
    echo "$style" > style.js
    echo "$component" > $file.js
  done
  return
}

# <------------------------------>

function react.chrome.extension () {

  #  ======================================
  #    Create a chrome extension with
  #    React and minimal other dependencies.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      cp -r ${root}/templates/extension/. .

      local package="$(cat ${root}/templates/extension/package.json)"
      local webpack="$(cat ${root}/templates/extension/webpack.config.js)"
      local application="$(cat ${root}/templates/extension/src/settings/application.yaml)"
      local M1="$(cat ${root}/templates/extension/src/support/application/data/types/generic/manifest.json)"
      local M2="$(cat ${root}/templates/extension/src/support/application/data/types/popup/manifest.json)"
      local M3="$(cat ${root}/templates/extension/src/support/application/data/types/content/manifest.json)"

      package=$(sed "s/Placeholder/${file}/g" <<< "$package")
      package=$(sed "s/placeholder/${folder}/g" <<< "$package")
      webpack=$(sed "s/Placeholder/${file}/g" <<< "$webpack")
      webpack=$(sed "s/placeholder/${folder}/g" <<< "$webpack")
      application=$(sed "s/Placeholder/${file}/g" <<< "$application")
      application=$(sed "s/placeholder/${folder}/g" <<< "$application")
      M1=$(sed "s/Placeholder/${file}/g" <<< "$M1")
      M1=$(sed "s/placeholder/${folder}/g" <<< "$M1")
      M2=$(sed "s/Placeholder/${file}/g" <<< "$M2")
      M2=$(sed "s/placeholder/${folder}/g" <<< "$M2")
      M3=$(sed "s/Placeholder/${file}/g" <<< "$M3")
      M3=$(sed "s/placeholder/${folder}/g" <<< "$M3")

      echo "$package" > package.json
      echo "$webpack" > webpack.config.js
      echo "$application" > src/settings/application.yaml

      echo "$M1" > src/support/application/data/types/generic/manifest.json
      echo "$M2" > src/support/application/data/types/popup/manifest.json
      echo "$M3" > src/support/application/data/types/content/manifest.json
      yarn update
    fi
    cd $initial
  done
  return
}


# <------------------------------>

function react.page () {

  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to
  #    page name inside it.
  #
  #    Also props.json to keep things neat.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local JS="$(cat ${root}/templates/app/page/Component.js)"
      local CSS="$(cat ${root}/templates/app/page/Component.css)"
      local index="$(cat ${root}/templates/app/page/index.js)"
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      CSS=$(sed "s/Placeholder/${file}/g" <<< "$CSS")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      echo "$JS" > ${file}.js
      echo "$CSS" > ${file}.css
      echo "$index" > index.js
      echo "{}" > props.json
    fi
    cd $initial
  done
  return
}

# <------------------------------>

function react.app () {

  #  ======================================
  #    Create a project with create-react-app,
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
      echo "$package" > package.json

      yarn update
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>

function react.jest.test () {
  local root=$1
  local initial=$(pwd)
  local files=($(ls *js))
  [ -d __tests__ ] || mkdir -p __tests__

  for i in "${(z)files}"; do
    local filename=$(basename -- "$i")
    local extension="${filename##*.}"
    filename="${filename%.*}"

    local file="$(tr '[:upper:]' '[:lower:]' <<< $filename)"
    local test="$(cat ${root}/templates/test/unit.test.js)"
    test=$(sed "s/placeholder/${file}/g" <<< "$test")
    test=$(sed "s/Placeholder/${file}/g" <<< "$test")

    cd __tests__
    if [[ ! -f "$file.test.js" ]]; then
      echo "$test" > "$file.test.js"
    fi
    cd $initial
  done
  return
}

function react.cypress.test () {
  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:upper:]' '[:lower:]' <<< $i)"
    local test="$(cat ${root}/templates/test/e2e.test.js)"
    test=$(sed "s/placeholder/${file}/g" <<< "$test")
    test=$(sed "s/Placeholder/${file}/g" <<< "$test")
    echo "$i"
    echo "$test" > "$file.spec.js"
    cd $initial
  done
  return
}
