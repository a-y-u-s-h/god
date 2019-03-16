#  =============================================
#  
#    /$$   /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$
#   | $$$ | $$ /$$__  $$| $$__  $$| $$_____/
#   | $$$$| $$| $$  \ $$| $$  \ $$| $$
#   | $$ $$ $$| $$  | $$| $$  | $$| $$$$$
#   | $$  $$$$| $$  | $$| $$  | $$| $$__/
#   | $$\  $$$| $$  | $$| $$  | $$| $$
#   | $$ \  $$|  $$$$$$/| $$$$$$$/| $$$$$$$$
#   |__/  \__/ \______/ |_______/ |________/
# 
#  =============================================
#  
#  Everything that can be automated related to
#  a Node based workflow.
#  
#  1. Node Project Scaffolding (Custom)
#  2. Node API Scaffolding (Custom)
#    
#  =============================================


function node.app () {
  local root=$1
  local initial=$(pwd)
  
  for i in ${@:2}; do
    cp -R "${root}/templates/app/" $i
    cd $i
    npm init -y >/dev/null 2>&1
    git init -y >/dev/null 2>&1
    npm i --save ejs
    npm i --save shelljs
    cd $initial
  done

  return
}

function node.api () {
  local root=$1
  local initial=$(pwd)
  
  for i in ${@:2}; do
    cp -R "${root}/templates/api/" $i
    cd $i
    npm init -y >/dev/null 2>&1
    git init -y >/dev/null 2>&1
    npm i --save express
    cd $initial
  done
  
  return
}