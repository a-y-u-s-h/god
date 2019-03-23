function snippet.pack () {
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "Language" "${@:3}"
  cp -R "${root}/templates/snippet.pack/" ${@:2}
  return
}

function snippet.file () {
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "js" "${@:3}"
  [ -z "$3" ] && set -- "${@:1}" "template" "${@:4}"
  for i in "${@:3}"; do
    local snippet=`cat ${root}/templates/snippet/languages/$2.sublime-snippet`
    snippet=$(sed "s/TRIGGER/$i/g" <<< "$snippet")
    echo $snippet > $i.sublime-snippet 
  done
  return
}