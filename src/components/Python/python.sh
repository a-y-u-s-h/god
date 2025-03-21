function python.app () {
  local root=$1
  local initial=$(pwd)
  [ -z "$2" ] && set -- "${@:1}" "app" "${@:3}"
  for i in "${@:2}"; do
    cp -R "${root}/templates/app/" $i
  done
  return
}

# <------------------------------>


function python.api () {
  local root=$1
  if [[ $2 == "flask.api" || $2 == "python.api" || $2 == "python.api.flask" || $2 == "api.flask" ]]; then

    #  ======================================
    #    If user wants to have a flask api,
    #    give him a flask api. If he types
    #    python.api, give him a flask api because
    #    it's light weight.
    #  ======================================

    [ -z "$3" ] && set -- "${@:1}" "api" "${@:4}"
    cp -R "${root}/templates/api/flask/" "${@:3}"

    elif [[ $2 == "django.api" || $2 == "python.api.django" || $2 == "api.django" ]]; then

    #  ======================================
    #    Otherwise if specifically specified that
    #    a django api is needed, create a django
    #    api then obviously.
    #  ======================================

    [ -z "$3" ] && set -- "${@:1}" "api" "${@:4}"
    cp -R "${root}/templates/api/django/" "${@:3}"
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

# <------------------------------>

function python.update () {
  sudo -H pip3 install --upgrade pip --force --user --no-warn-script-location
  sudo pip3 list --user --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 sudo pip3 install --user -U --ignore-installed  --no-warn-script-location --user
  return
}

# <------------------------------>
