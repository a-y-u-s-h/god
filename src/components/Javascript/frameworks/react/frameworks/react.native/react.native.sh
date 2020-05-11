
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

      local app=`cat ${root}/templates/app/${type}/app.json`
      app=$(sed "s/Placeholder/${i}/g" <<< "$app")
      app=$(sed "s/placeholder/${i}/g" <<< "$app")
      echo $app > ./app.json

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
      local store=`cat ${root}/templates/components/component/component.store.js`
      local style=`cat ${root}/templates/components/component/component.style.js`
      local types=`cat ${root}/templates/components/component/component.types.js`
      local index=`cat ${root}/templates/components/component/index.js`

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
      local store=`cat ${root}/templates/components/screen/screen.store.js`
      local style=`cat ${root}/templates/components/screen/screen.style.js`
      local types=`cat ${root}/templates/components/screen/screen.types.js`
      local navigation=`cat ${root}/templates/components/screen/screen.navigation.js`

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
