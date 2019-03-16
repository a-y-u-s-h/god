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
    [ -d $i ] || mkdir -p $i
    if [[ -d $i ]]; then
      cd $i
      touch $i.js
      touch $i.css
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
      cp -R "${root}/templates/app/" src/
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>
