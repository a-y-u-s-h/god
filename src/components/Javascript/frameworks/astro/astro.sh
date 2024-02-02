#  ======================================================
#
#                       █████
#                      ░░███
#     ██████    █████  ███████   ████████   ██████
#    ░░░░░███  ███░░  ░░░███░   ░░███░░███ ███░░███
#     ███████ ░░█████   ░███     ░███ ░░░ ░███ ░███
#    ███░░███  ░░░░███  ░███ ███ ░███     ░███ ░███
#   ░░████████ ██████   ░░█████  █████    ░░██████
#    ░░░░░░░░ ░░░░░░     ░░░░░  ░░░░░      ░░░░░░
#
#  ======================================================
#
#  Everything that I can automate related to Astro.
#
#  1. Astro Project Scaffolding (Custom)
#  2. Astro Component Scaffolding (Custom)
#
#  ======================================================

function astro.app () {

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
      local index=`cat ${root}/templates/app/${type}/src/root.astro`

      package=$(sed "s/Placeholder/${file}/g" <<< "$package")
      package=$(sed "s/placeholder/${folder}/g" <<< "$package")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo "$package" > package.json
      echo "$index" > src/root.astro


      bun install && bun update
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

function astro.component () {

  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      cp -r ${root}/templates/component/${type}/. . >/dev/null 2>&1

      local state=`cat ${root}/templates/component/${type}/src/system/states.yaml`
      local index=`cat ${root}/templates/component/${type}/index.jsx`

      state=$(sed "s/Placeholder/${file}/g" <<< "$state")
      state=$(sed "s/placeholder/${folder}/g" <<< "$state")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo "$state" > src/system/states.yaml
      echo "$index" > index.jsx

      cd $initial >/dev/null 2>&1
    fi
    cd $initial >/dev/null 2>&1
  done
  cd $initial >/dev/null 2>&1
  return
}


