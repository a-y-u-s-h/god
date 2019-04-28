#  ================================================================
#  
#     /$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$  /$$$$$$$  /$$     /$$
#    /$$__  $$ /$$__  $$|__  $$__//$$__  $$| $$__  $$|  $$   /$$/
#   | $$  \__/| $$  \ $$   | $$  | $$  \__/| $$  \ $$ \  $$ /$$/
#   | $$ /$$$$| $$$$$$$$   | $$  |  $$$$$$ | $$$$$$$   \  $$$$/
#   | $$|_  $$| $$__  $$   | $$   \____  $$| $$__  $$   \  $$/
#   | $$  \ $$| $$  | $$   | $$   /$$  \ $$| $$  \ $$    | $$
#   |  $$$$$$/| $$  | $$   | $$  |  $$$$$$/| $$$$$$$/    | $$
#    \______/ |__/  |__/   |__/   \______/ |_______/     |__/
#    
#  ===============================================================
#  
#  Everything that I can automate related to React.
#  
#  1. React Project Scaffolding (Custom)
#  2. React Component Scaffolding (Custom, P5)
#  
#  ===============================================================

function gatsby.component () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    component name inside it.
  #    
  #    Also props.json to keep things neat.
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local JS=`cat ${root}/templates/component/component.js`
      local SCSS=`cat ${root}/templates/component/component.module.scss`
      local index=`cat ${root}/templates/component/index.js`
      
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
      
      SCSS=$(sed "s/Placeholder/${file}/g" <<< "$SCSS")
      SCSS=$(sed "s/placeholder/${folder}/g" <<< "$SCSS")

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo $JS > ${folder}.js 
      echo $index > index.js 
      echo $SCSS > ${folder}.module.scss
      echo "{}" > props.json
    fi
    cd $initial 
  done
  return
}

# <------------------------------>

function gatsby.page () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    page name inside it.
  #    
  #    Also props.json to keep things neat.
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"
    
    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}
      local JS=`cat ${root}/templates/page/page.js`
      local SCSS=`cat ${root}/templates/page/page.module.scss`
      local index=`cat ${root}/templates/page/index.js`
      
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
      
      SCSS=$(sed "s/Placeholder/${file}/g" <<< "$SCSS")
      SCSS=$(sed "s/placeholder/${folder}/g" <<< "$SCSS")

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo $JS > ${folder}.js 
      echo $index > index.js 
      echo $SCSS > ${folder}.module.scss
      echo "{}" > props.json
    fi
    cd $initial 
  done
  return
}

# <------------------------------>

function gatsby.app () {
  
  #  ======================================
  #    Create a project with `create-gatsby-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a 
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    create-gatsby-app $i
    if [[ -d $i/src/ ]]; then
      cd $i
      rm -rvf src/
      rm -rvf README.md
      touch README.md
      echo "NODE_PATH=src/" > .env
      cp -R "${root}/templates/app/src/" ./src/ 
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}