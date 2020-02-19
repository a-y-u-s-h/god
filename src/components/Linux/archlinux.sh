# <------------------------------>

function archlinux.update () {
  echo "Fetching latest mirrorlist..."
  sudo reflector --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
  sudo pacman -Sc --noconfirm
  yay -Sc --noconfirm
  sudo pacman -Syyu --noconfirm
  yay -Syyu --noconfirm --answerdiff=None
  sudo pacman -Sc --noconfirm    
  yay -Sc --noconfirm
  return
}

function archlinux.info () {
  sudo pacman -Qe
  return
}

# <------------------------------>
