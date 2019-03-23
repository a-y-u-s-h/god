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
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local JS="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local component="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${component} ] || mkdir -p ${component}
    if [[ -d ${component} ]]; then
      cd ${component}
      local template=`cat ${root}/templates/Component.js`
      template=$(sed "s/Placeholder/${JS}/g" <<< "$template")
      echo $template > ${JS}.js 
      touch ${JS}.css
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
