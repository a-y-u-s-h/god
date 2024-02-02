#  ======================================
#                           /$$                 /$$
#                          | $$                | $$
#     /$$   /$$  /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$
#    |  $$ /$$/ /$$_____/|_  $$_/   |____  $$|_  $$_/   /$$__  $$
#     \  $$$$/ |  $$$$$$   | $$      /$$$$$$$  | $$    | $$$$$$$$
#      >$$  $$  \____  $$  | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
#     /$$/\  $$ /$$$$$$$/  |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
#    |__/  \__/|_______/    \___/   \_______/   \___/   \_______/
#
#  ======================================

function xstate.system () {

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local states="$(cat ${root}/templates/system/${type}/states.yaml)"
      local options="$(cat ${root}/templates/system/${type}/options.js)"
      local index="$(cat ${root}/templates/system/${type}/index.js)"

      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      options=$(sed "s/placeholder/${folder}/g" <<< "$options")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo "$states" > states.yaml
      echo "$options" > options.js
      echo "$index" > index.js
    fi
    cd $initial
  done
  return
}

function xstate.react.system () {

  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      cp -R ${root}/templates/system/react/* . >/dev/null 2>&1

      local states="$(cat ${root}/templates/system/react/states.yaml)"
      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      states=$(sed "s/Placeholder/${file}/g" <<< "$states")
      echo "$states" > states.yaml
    fi
    cd $initial
  done
  return
}

function xstate.p5 () {

  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local states="$(cat ${root}/templates/p5/states.yaml)"
      local options="$(cat ${root}/templates/p5/options.js)"
      local sketch="$(cat ${root}/templates/p5/sketch.js)"
      local index="$(cat ${root}/templates/p5/index.js)"

      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      options=$(sed "s/placeholder/${folder}/g" <<< "$options")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")
      sketch=$(sed "s/placeholder/${folder}/g" <<< "$sketch")

      echo "$states" > states.yaml
      echo "$sketch" > sketch.js
      echo "$options" > options.js
      echo "$index" > index.js
    fi
    cd $initial
  done
  return
}

function xstate.pixi () {

  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local states="$(cat ${root}/templates/pixi/states.yaml)"
      local options="$(cat ${root}/templates/pixi/options.js)"
      local sketch="$(cat ${root}/templates/pixi/sketch.js)"
      local index="$(cat ${root}/templates/pixi/index.js)"

      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      options=$(sed "s/placeholder/${folder}/g" <<< "$options")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")
      sketch=$(sed "s/placeholder/${folder}/g" <<< "$sketch")

      echo "$states" > states.yaml
      echo "$sketch" > sketch.js
      echo "$options" > options.js
      echo "$index" > index.js
    fi
    cd $initial
  done
  return
}

function xstate.three () {

  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local states="$(cat ${root}/templates/three/states.yaml)"
      local options="$(cat ${root}/templates/three/options.js)"
      local sketch="$(cat ${root}/templates/three/sketch.js)"
      local index="$(cat ${root}/templates/three/index.js)"

      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      options=$(sed "s/placeholder/${folder}/g" <<< "$options")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")
      sketch=$(sed "s/placeholder/${folder}/g" <<< "$sketch")

      echo "$states" > states.yaml
      echo "$sketch" > sketch.js
      echo "$options" > options.js
      echo "$index" > index.js
    fi
    cd $initial
  done
  return
}



function xstate.react.component () {
  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      cp -R ${root}/templates/component/react/* . >/dev/null 2>&1

      local component="$(cat ${root}/templates/component/react/index.jsx)"
      local states="$(cat ${root}/templates/component/react/src/system/states.yaml)"

      component=$(sed "s/placeholder/${folder}/g" <<< "$component")
      component=$(sed "s/Placeholder/${file}/g" <<< "$component")
      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      states=$(sed "s/Placeholder/${file}/g" <<< "$states")

      echo "$component" > index.jsx
      echo "$states" > src/system/states.yaml
    fi
    cd $initial >/dev/null 2>&1
  done
  return
}
