function python.app () {
  local root=$1
  for i in ${@:2}; do
    cp -R "${root}/templates/app/" $i  
  done
  return
}

# <------------------------------>


function python.api () {
  local root=$1
  if [[ $2 == "flask.api" || $2 == "python.api" ]]; then
    
    #  ======================================
    #    If user wants to have a flask api,
    #    give him a flask api. If he types
    #    python.api, give him a flask api because
    #    it's light weight.
    #  ======================================
    
    for i in ${@:3}; do
      cp -R "${root}/templates/api/flask" $i  
    done

    elif [[ $2 == "django.api" ]]; then
    
    #  ======================================
    #    Otherwise if specifically specified that
    #    a django api is needed, create a django
    #    api then obviously.
    #  ======================================
    
    for i in ${@:3}; do
      cp -R "${root}/templates/api/django" $i  
    done          
  fi
  return
}

# <------------------------------>

function python.run () {
  for file in "$@"; do
    python3 ${file}
  done
  return
}