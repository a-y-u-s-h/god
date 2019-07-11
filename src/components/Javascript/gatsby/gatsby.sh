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
#  Everything that I can automate related to Gatsby.
#  
#  1. Gatsby Project Scaffolding (Custom)
#  
#  ===============================================================

function gatsby.post () {
  
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

      index=$(sed "s/Placeholder/${file}/g" <<< "$index")+
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
          rm -rvf ./component.module.scss   >/dev/null 2>&1
          rm -rvf ./component.stories.js    >/dev/null 2>&1

          local JS=`cat ${root}/templates/component/storybook/${category}/component.js`
          local SCSS=`cat ${root}/templates/component/storybook/${category}/component.module.scss`
          local index=`cat ${root}/templates/component/storybook/${category}/index.js`
          local story=`cat ${root}/templates/component/storybook/${category}/component.stories.js`

          JS=$(sed "s/Placeholder/${file}/g" <<< "$JS")
          JS=$(sed "s/placeholder/${folder}/g" <<< "$JS")
          
          SCSS=$(sed "s/Placeholder/${file}/g" <<< "$SCSS")
          SCSS=$(sed "s/placeholder/${folder}/g" <<< "$SCSS")

          index=$(sed "s/Placeholder/${file}/g" <<< "$index")
          index=$(sed "s/placeholder/${folder}/g" <<< "$index")

          story=$(sed "s/Placeholder/${file}/g" <<< "$story")
          story=$(sed "s/placeholder/${folder}/g" <<< "$story")

          echo $JS > ${folder}.js
          echo $index > index.js 
          echo $SCSS > ${folder}.module.scss
          echo $story > ${folder}.stories.js
          echo "{}" > props.json
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
        local SCSS=`cat ${root}/templates/component/${type}/component.module.scss`
        local index=`cat ${root}/templates/component/${type}/index.js`
        
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
      
      local site=`cat ./data/meta/site.yaml`
      site=$(sed "s/Placeholder/${i}/g" <<< "$site")
      site=$(sed "s/placeholder/${i}/g" <<< "$site")
      echo $site > ./data/meta/site.yaml
      
      yarn install
      yarn upgrade -D
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}