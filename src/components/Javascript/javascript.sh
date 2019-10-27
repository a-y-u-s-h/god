function javascript.update () {
  nvm install stable
  nvm deactivate
  nvm alias default node
  nvm use default
  sudo npm i -g npm@latest
  sudo npm update -g
  return
}