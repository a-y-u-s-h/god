# <------------------------------>

function archlinux.update () {
  sudo paccache -rk1
  echo "Fetching latest mirrorlist..."
  sudo reflector --download-timeout 10 --latest 5 --age 50 --p http --sort rate --save /etc/pacman.d/mirrorlist
  sudo pacman -Sc --noconfirm
  yay -Sc --noconfirm
  sudo pacman -Syy --noconfirm && sudo pacman -Syu --noconfirm
  yay -Syyu --noconfirm --answerdiff=None
  sudo pacman -Sc --noconfirm
  yay -Sc --noconfirm
  sudo paccache -rk1
  return
}

function archlinux.info () {
  sudo pacman -Qe
  return
}

# <------------------------------>
