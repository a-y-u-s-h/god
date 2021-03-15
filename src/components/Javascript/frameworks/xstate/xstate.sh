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

function xstate.react.component () {
  local root=$1
  local initial=$(pwd)

  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local component="$(cat ${root}/templates/component/react/index.js)"
      local states="$(cat ${root}/templates/component/react/system/states.yaml)"
      local options="$(cat ${root}/templates/component/react/system/options.js)"
      local index="$(cat ${root}/templates/component/react/system/index.js)"
      local triggers="$(cat ${root}/templates/component/react/system/triggers.js)"

      states=$(sed "s/placeholder/${folder}/g" <<< "$states")
      options=$(sed "s/placeholder/${folder}/g" <<< "$options")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")
      triggers=$(sed "s/placeholder/${folder}/g" <<< "$triggers")
      component=$(sed "s/placeholder/${folder}/g" <<< "$component")

      states=$(sed "s/Placeholder/${file}/g" <<< "$states")
      options=$(sed "s/Placeholder/${file}/g" <<< "$options")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      triggers=$(sed "s/Placeholder/${file}/g" <<< "$triggers")
      component=$(sed "s/Placeholder/${file}/g" <<< "$component")

      echo "$component" > index.js
      [ -d system ] || mkdir -p system
      if [[ -d system ]]; then
        cd system
        echo "$states" > states.yaml
        echo "$options" > options.js
        echo "$index" > index.js
        echo "$triggers" > triggers.js
        cd ..
      fi
    fi
    cd $initial
  done
  return
}
