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
      local JS=`cat ${root}/templates/app/component/Component.js`
      local CSS=`cat ${root}/templates/app/component/Component.css`
      local index=`cat ${root}/templates/app/component/index.js`
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      CSS=$(sed "s/Placeholder/${file}/g" <<< "$CSS")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      echo $JS > ${file}.js 
      echo $CSS > ${file}.css
      echo $index > index.js
      echo "{}" > props.json
    fi
    cd $initial 
  done
  return
}

# <------------------------------>

function react.page () {
  
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
      local JS=`cat ${root}/templates/app/page/Component.js`
      local CSS=`cat ${root}/templates/app/page/Component.css`
      local index=`cat ${root}/templates/app/page/index.js`
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      CSS=$(sed "s/Placeholder/${file}/g" <<< "$CSS")
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")
      echo $JS > ${file}.js 
      echo $CSS > ${file}.css
      echo $index > index.js
      echo "{}" > props.json
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
    yarn create react-app $ic
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

# ==============================================================
# 
#    /$$   /$$  /$$$$$$  /$$$$$$$$ /$$$$$$ /$$    /$$ /$$$$$$$$
#   | $$$ | $$ /$$__  $$|__  $$__/|_  $$_/| $$   | $$| $$_____/
#   | $$$$| $$| $$  \ $$   | $$     | $$  | $$   | $$| $$
#   | $$ $$ $$| $$$$$$$$   | $$     | $$  |  $$ / $$/| $$$$$
#   | $$  $$$$| $$__  $$   | $$     | $$   \  $$ $$/ | $$__/
#   | $$\  $$$| $$  | $$   | $$     | $$    \  $$$/  | $$
#   | $$ \  $$| $$  | $$   | $$    /$$$$$$   \  $/   | $$$$$$$$
#   |__/  \__/|__/  |__/   |__/   |______/    \_/    |________/
# 
# ==============================================================



function react.native.app () {
  
  #  ======================================
  #    Create a project with `create-react-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a 
  #    React project.
  #  ======================================

  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    react-native init $i
      cd $i
      rm -rvf .idea
      touch README.md
      mkdir src/
      echo "NODE_PATH=src/" > .env
      cp -R "${root}/templates/native/src/" ./src/ 
      cd $initial
    cd $initial
  done
  cd $initial
  return
}

# <------------------------------>

function react.native.component () {
  
  #  ======================================
  #    Create a folder with a JS
  #    files inside it corresponding to 
  #    component name inside it, and a styles.json.
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
      local JS=`cat ${root}/templates/native/Component.js`
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      echo $JS > ${file}.js 
      echo $CSS > ${file}.css
      echo "{}" > props.json
    fi
    cd $initial 
  done
  return
}
