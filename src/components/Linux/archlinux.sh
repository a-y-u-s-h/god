# <------------------------------>

function archlinux.update () {
  sudo pacman -Syu --noconfirm
  yay -Syu --noconfirm --answerdiff=None
  return
}

# <------------------------------>
