#  ======================================================
#
#                                        ███
#                                       ░░░
#    ████████   ██████  █████████████   ████  █████ █████
#   ░░███░░███ ███░░███░░███░░███░░███ ░░███ ░░███ ░░███
#    ░███ ░░░ ░███████  ░███ ░███ ░███  ░███  ░░░█████░
#    ░███     ░███░░░   ░███ ░███ ░███  ░███   ███░░░███
#    █████    ░░██████  █████░███ █████ █████ █████ █████
#   ░░░░░      ░░░░░░  ░░░░░ ░░░ ░░░░░ ░░░░░ ░░░░░ ░░░░░
#
#
#  ======================================================
#
#  Everything that I can automate related to Remix.
#
#  1. Remix Project Scaffolding (Custom)
#  2. Remix Component Scaffolding (Custom)
#
#  ======================================================

function remix.app () {

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
      local index=`cat ${root}/templates/app/${type}/src/root.jsx`

      package=$(sed "s/Placeholder/${i}/g" <<< "$package")
      package=$(sed "s/placeholder/${i}/g" <<< "$package")
      index=$(sed "s/Placeholder/${i}/g" <<< "$index")
      index=$(sed "s/placeholder/${i}/g" <<< "$index")

      echo "$package" > package.json
      echo "$index" > src/root.jsx


      bun update && bun install
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}



