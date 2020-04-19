#  ============================================
#  
#   /$$   /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$
#  | $$$ | $$ /$$__  $$| $$__  $$| $$_____/
#  | $$$$| $$| $$  \ $$| $$  \ $$| $$
#  | $$ $$ $$| $$  | $$| $$  | $$| $$$$$
#  | $$  $$$$| $$  | $$| $$  | $$| $$__/
#  | $$\  $$$| $$  | $$| $$  | $$| $$
#  | $$ \  $$|  $$$$$$/| $$$$$$$/| $$$$$$$$
#  |__/  \__/ \______/ |_______/ |________/
#
#  ============================================



function node.app () {
  
  #  ======================================
  #  
  #    Scaffold a basic opinionated 
  #    NodeJS application based on the 
  #    template provided.
  #    
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  cp -R "${root}/templates/app/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      local package=`cat ${root}/templates/app/package.json`
      local webpack=`cat ${root}/templates/app/webpack.config.js`

      package=$(sed "s/Placeholder/$i/g" <<< "$package")
      package=$(sed "s/placeholder/$i/g" <<< "$package")
      
      webpack=$(sed "s/Placeholder/$i/g" <<< "$webpack")
      webpack=$(sed "s/placeholder/$i/g" <<< "$webpack")

      echo $package > package.json
      echo $webpack > webpack.config.js 

      yarn init -y
      npx npm-check-updates -u && yarn install
    fi
    cd $initial
  done
  return
}

function node.cli () {
  
  #  ======================================
  #   
  #   Create a CLI application based on
  #   the template provided, and update 
  #   the dependencies if they're not already
  #   the newest ones.
  #    
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "cli" "${@:3}"
  cp -R "${root}/templates/cli/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      local package=`cat ${root}/templates/cli/package.json`
      local webpack=`cat ${root}/templates/cli/webpack.config.js`
      local application=`cat ${root}/templates/cli/src/settings/application.yaml`
      
      webpack=$(sed "s/Placeholder/$i/g" <<< "$webpack")
      webpack=$(sed "s/placeholder/$i/g" <<< "$webpack")

      package=$(sed "s/Placeholder/$i/g" <<< "$package")
      package=$(sed "s/placeholder/$i/g" <<< "$package")

      application=$(sed "s/Placeholder/$i/g" <<< "$application")
      application=$(sed "s/placeholder/$i/g" <<< "$application")

      echo $package > package.json
      echo $webpack > webpack.config.js 
      echo $application > src/settings/application.yaml 
      yarn init -y
      npx npm-check-updates -u && yarn install
    fi
    cd $initial
  done
  return
}

function node.pixi () {
  
  #  ======================================
  #  
  #    Scaffold a basic opinionated 
  #    NodeJS application. Following things
  #    happen:
  #    
  #    1. Copy the template 'pixi'.
  #    2. If user passes no name, use default: app.
  #    3. Execute: npm init.
  #    4. Execute: git init.
  #    5. Install express. (to serve)
  #    6. Install ejs.     (templating engine)
  #    
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  cp -R "${root}/templates/pixi/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i
      npm init -y                       >/dev/null 2>&1
      echo "Executed    : npm init"
      git init -y                       >/dev/null 2>&1
      echo "Executed    : git init"
      echo "Installing  : express"
      npm i --save express              >/dev/null 2>&1
      echo "Installing  : ejs"
      npm i --save ejs                  >/dev/null 2>&1      
    fi
    cd $initial
  done
  return
}

function node.api () {

  #  ======================================
  #    
  #    Scaffold a basic api template for Node.
  #    Following things happen:
  #    
  #    1. Copy the template 'api'.
  #    2. If user passes no name, use default: 'api'.
  #    3. Execute npm init.
  #    4. Execute git init.
  #    
  #  ======================================
  

  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "api" "${@:3}"
  cp -R "${root}/templates/api/" ${@:2}
  for i in ${@:2}; do
    if [[ -d $i ]]; then
      cd $i                                            
      npm init -y                       >/dev/null 2>&1
      echo "Executed    : npm init"                    
      git init -y                       >/dev/null 2>&1
      echo "Executed    : git init"                    
      echo "Installing  : express"                     
      npm i --save express              >/dev/null 2>&1
    fi
    cd $initial
  done
  return
}

function node.run () {
  for file in "$@"; do
    node ${file}
  done
  return
}