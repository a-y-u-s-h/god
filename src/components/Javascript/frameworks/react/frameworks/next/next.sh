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

function next.app () {

  #  ======================================
  #    Basic next.js application boilerplate.
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
      echo "$package" > package.json

      yarn update
      git init
      git add . && git commit -m "Initial Commit."
      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}
