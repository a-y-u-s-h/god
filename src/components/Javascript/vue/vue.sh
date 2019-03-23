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
#  1. React Project Scaffolding (Custom)
#  2. React Component Scaffolding (Custom, P5)
#  
#  ==================================

function vue.component () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    component name inside it.
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local JS="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    touch ${JS}.vue
    cd $initial 
  done
  return
}

# <------------------------------>

function vue.app () {
  
  #  ======================================
  #    Create a project with `create-react-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a 
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    create-react-app $i
    if [[ -d $i/src/ ]]; then
      cd $i
      rm -rvf src/
      rm -rvf README.md
      touch README.md
      cp -R "${root}/templates/app/src/" ./src/ 
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>
