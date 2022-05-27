#  ======================================
#                                     /$$
#                                    | $$
#     /$$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$
#    | $$__  $$ /$$__  $$|  $$ /$$/|_  $$_/
#    | $$  \ $$| $$$$$$$$ \  $$$$/   | $$
#    | $$  | $$| $$_____/  >$$  $$   | $$ /$$
#    | $$  | $$|  $$$$$$$ /$$/\  $$  |  $$$$/
#    |__/  |__/ \_______/|__/  \__/   \___/
#
#  ======================================

# <------------------------------>

function eth.app () {

  #  ======================================
  #    Basic eth.js application boilerplate.
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
      cp -r ${root}/templates/${type}/. .

      #  ======================================
      #    Copy package.json, then update the
      #    packages. Copy updated package.json
      #    back into template folder and then
      #    replace all the project specific information
      #    into the package.json that's inside the
      #    project directory.
      #  ======================================

      local package="$(cat ${root}/templates/${type}/package.json)"
      echo "$package" > package.json

      yarn init -y
      yarn update

      local project="$(cat ./package.json)"
      echo "$project" > "${root}/templates/${type}/package.json"
      project=$(sed "s/Placeholder/$i/g" <<< "$project")
      project=$(sed "s/placeholder/$i/g" <<< "$project")
      echo "$project" > package.json

      #  ======================================
      #    Copy and update project specific
      #    information in the generated project.
      #  ======================================
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}
