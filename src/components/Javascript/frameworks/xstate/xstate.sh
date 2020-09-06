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

function xstate.component () {

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      local states="$(cat ${root}/templates/component/${type}/states.yaml)"
      local options="$(cat ${root}/templates/component/${type}/options.js)"
      local index="$(cat ${root}/templates/component/${type}/index.js)"

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
