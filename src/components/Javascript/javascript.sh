function javascript.update () {
  nvm install --lts
  nvm alias default node
  sudo npm i -g npm@latest
  sudo npm update -g
  return
}