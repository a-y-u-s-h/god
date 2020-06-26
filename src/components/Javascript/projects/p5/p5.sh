
function p5.app () {

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

      local index="$(cat ${root}/templates/${type}/index.html)"
      index=$(sed "s/Placeholder/${file}/g" <<< "$index")+
      index=$(sed "s/placeholder/${folder}/g" <<< "$index")
      echo "$index" > index.html

      cd $initial
    fi
    cd $initial
  done
  cd $initial
  return
}
