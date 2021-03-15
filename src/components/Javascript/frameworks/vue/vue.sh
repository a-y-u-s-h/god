#  ==================================
#
#   /$$    /$$ /$$   /$$ /$$$$$$$$
#  | $$   | $$| $$  | $$| $$_____/
#  | $$   | $$| $$  | $$| $$
#  |  $$ / $$/| $$  | $$| $$$$$
#   \  $$ $$/ | $$  | $$| $$__/
#    \  $$$/  | $$  | $$| $$
#     \  $/   |  $$$$$$/| $$$$$$$$
#      \_/     \______/ |________/
#
#  ==================================
#
#  Everything that can be automated related to Vue.
#
#  1. Vue Project Scaffolding (Custom)
#  2. Vue Component Scaffolding (Custom)
#  3. Vue Container Scaffolding (Custom)
#
#  ==================================

function vue.component () {

  #  ======================================
  #    Create a single file Vue
  #    component (one with a class)
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "Component" "${@:3}"
  for file in "${@:2}"; do
    local component="$(cat ${root}/templates/components/Component.vue)"
    component=$(sed "s/Placeholder/${file}/g" <<< "$component")
    echo "$component" > ${file}.vue
    cd $initial
  done
  return
}

function vue.container () {

  #  ======================================
  #    Create a single file Vue
  #    container (a component w/ an ID)
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "Container" "${@:3}"
  for file in "${@:2}"; do
    local container="$(cat ${root}/templates/components/Container.vue)"
    container=$(sed "s/Placeholder/${file}/g" <<< "$container")
    echo "$container" > ${file}.vue
    cd $initial
  done
  return
}

function vue.p5 () {

  #  ======================================
  #    Create a single file Vue
  #    container (a component w/ an ID)
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "P5" "${@:3}"
  for file in "${@:2}"; do
    local p5="$(cat ${root}/templates/components/P5.vue)"
    p5=$(sed "s/Placeholder/${file}/g" <<< "$p5")
    echo "$p5" > ${file}.vue
    cd $initial
  done
  return
}

# <------------------------------>

function vue.app () {

  #  ======================================
  #    Create a project with vue-cli,
  #    and then delete and add some files
  #    like I always do whenever I start a
  #    Vue project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  for i in "${@:2}"; do
    vue create --preset "${root}/templates/settings/presets/app.json" $i
    if [[ -d $i/src/ ]]; then
      cd $i
      cp -R ${root}/templates/settings/configs/.prettierrc ./.prettierrc
      rm -rvf src/
      rm -rvf README.md
      touch README.md
      cp -R "${root}/templates/app/default/src/" ./src/
      yarn upgrade --latest
      yarn add axios
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>
