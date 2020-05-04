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
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local JS=`cat ${root}/templates/app/component/Component.js`
      local CSS=`cat ${root}/templates/app/component/Component.css`
      local index=`cat ${root}/templates/app/component/index.js`
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      CSS=$(sed "s/Placeholder/${file}/g" <<< "$CSS")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      echo $JS > ${file}.js
      echo $CSS > ${file}.css
      echo $index > index.js
      echo "{}" > props.json
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
      local JS=`cat ${root}/templates/app/page/Component.js`
      local CSS=`cat ${root}/templates/app/page/Component.css`
      local index=`cat ${root}/templates/app/page/index.js`
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      CSS=$(sed "s/Placeholder/${file}/g" <<< "$CSS")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      echo $JS > ${file}.js
      echo $CSS > ${file}.css
      echo $index > index.js
      echo "{}" > props.json
    fi
    cd $initial
  done
  return
}

# <------------------------------>

function react.app () {

  #  ======================================
  #    Create a project with `create-react-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    npx create-react-app $i
    if [[ -d $i/src/ ]]; then
      cd $i
      rm -rvf src/
      rm -rvf README.md
      touch README.md
      echo "NODE_PATH=src/" > .env
      cp -R "${root}/templates/app/src/" ./src/
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

# ==============================================================
#
#    /$$   /$$  /$$$$$$  /$$$$$$$$ /$$$$$$ /$$    /$$ /$$$$$$$$
#   | $$$ | $$ /$$__  $$|__  $$__/|_  $$_/| $$   | $$| $$_____/
#   | $$$$| $$| $$  \ $$   | $$     | $$  | $$   | $$| $$
#   | $$ $$ $$| $$$$$$$$   | $$     | $$  |  $$ / $$/| $$$$$
#   | $$  $$$$| $$__  $$   | $$     | $$   \  $$ $$/ | $$__/
#   | $$\  $$$| $$  | $$   | $$     | $$    \  $$$/  | $$
#   | $$ \  $$| $$  | $$   | $$    /$$$$$$   \  $/   | $$$$$$$$
#   |__/  \__/|__/  |__/   |__/   |______/    \_/    |________/
#
# ==============================================================



function react.native.app () {

  #  ======================================
  #    Create a project with `create-react-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    react-native init $i
      cd $i
      rm -rvf .idea
      touch README.md
      mkdir src/
      echo "NODE_PATH=src/" > .env
      cp -R "${root}/templates/native/src/" ./src/
      cd $initial
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>

function react.native.component () {

  #  ======================================
  #    Create a component using the template
  #    stored in 'native' directory.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local store=`cat ${root}/templates/native/component/component.store.js`
      local style=`cat ${root}/templates/native/component/component.style.js`
      local types=`cat ${root}/templates/native/component/component.types.js`
      local index=`cat ${root}/templates/native/component/index.js`

      store=$(sed "s/Placeholder/${file}/g" <<< "$store")
      style=$(sed "s/Placeholder/${file}/g" <<< "$style")
      types=$(sed "s/Placeholder/${file}/g" <<< "$types")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")

      store=$(sed "s/placeholder/${folder}/g" <<< "$store")
      style=$(sed "s/placeholder/${folder}/g" <<< "$style")
      types=$(sed "s/placeholder/${folder}/g" <<< "$types")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo $store > ${folder}.store.js
      echo $style > ${folder}.style.js
      echo $types > ${folder}.types.js
      echo $index > index.js
    fi
    cd $initial
  done
  return
}

# <------------------------------>

function react.native.screen () {

  #  ======================================
  #    Create a component using the template
  #    stored in 'native' directory.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local store=`cat ${root}/templates/native/screen/component.store.js`
      local style=`cat ${root}/templates/native/screen/component.style.js`
      local types=`cat ${root}/templates/native/screen/component.types.js`
      local navigaton=`cat ${root}/templates/native/screen/component.navigation.js`

      store=$(sed "s/Placeholder/${file}/g" <<< "$store")
      style=$(sed "s/Placeholder/${file}/g" <<< "$style")
      types=$(sed "s/Placeholder/${file}/g" <<< "$types")
      navigation=$(sed "s/Placeholder/${file}/g" <<< "$navigation")

      store=$(sed "s/placeholder/${folder}/g" <<< "$store")
      style=$(sed "s/placeholder/${folder}/g" <<< "$style")
      types=$(sed "s/placeholder/${folder}/g" <<< "$types")
      navigation=$(sed "s/placeholder/${folder}/g" <<< "$navigation")

      echo $store       > ${folder}.store.js
      echo $style       > ${folder}.style.js
      echo $types       > ${folder}.types.js
      echo $navigation  > ${folder}.navigation.js
    fi
    cd $initial
  done
  return
}

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
    local test=`cat ${root}/templates/test/unit.test.js`
    test=$(sed "s/placeholder/${file}/g" <<< "$test")
    test=$(sed "s/Placeholder/${file}/g" <<< "$test")

    cd __tests__
    if [[ ! -f "$file.test.js" ]]; then
      echo $test > "$file.test.js"
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
    local test=`cat ${root}/templates/test/e2e.test.js`
    test=$(sed "s/placeholder/${file}/g" <<< "$test")
    test=$(sed "s/Placeholder/${file}/g" <<< "$test")
    echo "$i"
    echo $test > "$file.spec.js"
    cd $initial
  done
  return
}
