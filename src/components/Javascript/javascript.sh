function javascript.update () {
  nvm install stable
  nvm deactivate
  nvm alias default node
  nvm use default
  sudo npm i -g npm@latest
  npx npm-check-updates -g && npm update -g
  yarn global upgrade
  return
}