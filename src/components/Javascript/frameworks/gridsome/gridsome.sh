#  ======================================
#  
#     /$$$$$$            /$$       /$$
#    /$$__  $$          |__/      | $$
#   | $$  \__/  /$$$$$$  /$$  /$$$$$$$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
#   | $$ /$$$$ /$$__  $$| $$ /$$__  $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
#   | $$|_  $$| $$  \__/| $$| $$  | $$|  $$$$$$ | $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
#   | $$  \ $$| $$      | $$| $$  | $$ \____  $$| $$  | $$| $$ | $$ | $$| $$_____/
#   |  $$$$$$/| $$      | $$|  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
#    \______/ |__/      |__/ \_______/|_______/  \______/ |__/ |__/ |__/ \_______/
#    
#    Everything that I can automate related to Gridsome.
#    
#  ======================================

function gridsome.layout () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    page name inside it.
  #    
  #    Also settings.json to keep things neat.
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
      local style=`cat ${root}/templates/page/style.js`
      local index=`cat ${root}/templates/page/index.js`
      
      JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
      JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
      
      style=$(sed "s/Placeholder/${file}/g" <<< "$style")
      style=$(sed "s/placeholder/${folder}/g" <<< "$style")

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")+
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")

      echo $JS > ${folder}.js 
      echo $index > index.js 
      echo $style > style.js
      echo "{}" > settings.json
    fi
    cd $initial 
  done
  return
}

# <------------------------------>

function gridsome.component () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    component name inside it.
  #    
  #    Also settings.json to keep things neat.
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  local type=$2

  for i in "${@:3}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"

    [ -d ${folder} ] || mkdir -p ${folder}
    if [[ -d ${folder} ]]; then
      cd ${folder}

      if [[ $type == storybook* ]]; then

        #  ======================================
        #    If it's a storybook type component.
        #  ======================================

        local category=$(echo $type | cut -f2 -d.)

        if [[ $category != "multipletypes" ]]; then

          #  ======================================
          #    Copy everything from those folders
          #    and then delete the template files
          #    that get copied also. Instead create
          #    new files from template available in
          #    God.
          #  ======================================
          
          cp -R ${root}/templates/component/storybook/${category}/* ./
          rm -rvf ./component.js            >/dev/null 2>&1
          rm -rvf ./component.index.js      >/dev/null 2>&1
          rm -rvf ./style.js   >/dev/null 2>&1
          rm -rvf ./component.stories.js    >/dev/null 2>&1

          local JS=`cat ${root}/templates/component/storybook/${category}/component.js`
          local style=`cat ${root}/templates/component/storybook/${category}/style.js`
          local index=`cat ${root}/templates/component/storybook/${category}/index.js`
          local story=`cat ${root}/templates/component/storybook/${category}/component.stories.js`

          JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
          JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
          
          style=$(sed "s/Placeholder/${file}/g" <<< "$style")
          style=$(sed "s/placeholder/${folder}/g" <<< "$style")

          index=$(sed "s/Placeholder/${file}/g" <<< "$index")
          index=$(sed "s/placeholder/${folder}/g" <<< "$index")

          story=$(sed "s/Placeholder/${file}/g" <<< "$story")
          story=$(sed "s/placeholder/${folder}/g" <<< "$story")

          echo $JS > ${folder}.js
          echo $index > index.js 
          echo $style > style.js
          echo $story > ${folder}.stories.js
          echo "{}" > settings.json
        else
          #  ======================================
          #    If it is a multitype story component, just
          #    copy paste whatever's inside template
          #    folder. Then remove the component.stories.js
          #    and update it with a proper one.
          #  ======================================
          
          cp -R ${root}/templates/component/storybook/${category}/* ./
          rm -rvf ./component.stories.js >/dev/null 2>&1

          local story=`cat ${root}/templates/component/storybook/${category}/component.stories.js`
          story=$(sed "s/Placeholder/${file}/g" <<< "$story")
          story=$(sed "s/placeholder/${folder}/g" <<< "$story")
          echo $story > ${folder}.stories.js
        fi
      
      elif [[ $type != "multipletypes" ]]; then
  
        #  ======================================
        #    If it's not a multipletype component,
        #    and not a storybook type as well,
        #    deal with it normally.
        #  ======================================
  
        local JS=`cat ${root}/templates/component/${type}/component.js`
        local style=`cat ${root}/templates/component/${type}/style.js`
        local index=`cat ${root}/templates/component/${type}/index.js`
        
        JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
        JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
        
        style=$(sed "s/Placeholder/${file}/g" <<< "$style")
        style=$(sed "s/placeholder/${folder}/g" <<< "$style")

        index=$(sed "s/Placeholder/${file}/g" <<< "$index")
        index=$(sed "s/placeholder/${folder}/g" <<< "$index")

        echo $JS > ${folder}.js
        echo $index > index.js 
        echo $style > style.js
        echo "{}" > settings.json
      else
        
        #  ======================================
        #    If it is a multitype component, just
        #    copy paste whatever's inside template
        #    folder. Because we don't need to do
        #    anything else in this case.
        #  ======================================
        
        cp -R ${root}/templates/component/${type}/* ./
      fi
    fi
    cd $initial 
  done
  return
}

# <------------------------------>

function gridsome.page () {
  
  #  ======================================
  #    Create a folder with a JS and CSS
  #    file inside it corresponding to 
  #    page name inside it.
  #    
  #    Also settings.json to keep things neat.
  #  ======================================
  
  local root=$1
  local initial=$(pwd)
  for i in "${@:2}"; do
    local file="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
    local folder="$(tr '[:upper:]' '[:lower:]' <<< $i)"    
    
    local VUE=`cat ${root}/templates/page.vue`
    VUE=$(sed "s/Placeholder/${file}/g" <<< "$VUE")
    VUE=$(sed "s/placeholder/${folder}/g" <<< "$VUE")    
    echo $VUE > ${folder}.vue 
  done
  return
}

# <------------------------------>

function gridsome.app () {
  
  #  ======================================
  #    Create a project with `create-gridsome-app`,
  #    and then delete and add some files
  #    like I always do whenever I start a 
  #    React project.
  #  ======================================

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
      package=$(sed "s/Placeholder/${i}/g" <<< "$package")
      package=$(sed "s/placeholder/${i}/g" <<< "$package")
      echo $package > package.json

      local config=`cat ${root}/templates/app/${type}/gridsome.config.js`
      config=$(sed "s/Placeholder/${i}/g" <<< "$config")
      config=$(sed "s/placeholder/${i}/g" <<< "$config")
      echo $config > gridsome.config.js

      local server=`cat ${root}/templates/app/${type}/gridsome.server.js`
      server=$(sed "s/Placeholder/${i}/g" <<< "$server")
      server=$(sed "s/placeholder/${i}/g" <<< "$server")
      echo $server > gridsome.server.js
      
      yarn init -y
      npx npm-check-updates -u && yarn install
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}