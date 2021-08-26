# <------------------------------>

function archlinux.update () {
  sudo paccache -rk1
  echo "Fetching latest mirrorlist..."
  yes | sudo reflector --download-timeout 10 --latest 5 --age 50 --p http --sort rate --save /etc/pacman.d/mirrorlist
  yes | sudo pacman -Sc
  yes | yay -Sc
  yes | sudo pacman -Syy
  yes | sudo pacman -Syu --overwrite "*"
  yes | yay -Syyu --answerdiff=None
  yes | sudo pacman -Sc
  yes | yay -Sc
  yes | sudo paccache -rk1
  return
}

function archlinux.info () {
  sudo pacman -Qe
  return
}

# <------------------------------>
