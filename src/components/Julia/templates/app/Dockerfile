FROM archlinux/base

WORKDIR /app
ADD . /app

#                                   /$$
#                                  | $$
#    /$$$$$$$ /$$   /$$  /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$/$$$$
#   /$$_____/| $$  | $$ /$$_____/|_  $$_/   /$$__  $$| $$_  $$_  $$
#  |  $$$$$$ | $$  | $$|  $$$$$$   | $$    | $$$$$$$$| $$ \ $$ \ $$
#   \____  $$| $$  | $$ \____  $$  | $$ /$$| $$_____/| $$ | $$ | $$
#   /$$$$$$$/|  $$$$$$$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$ | $$ | $$
#  |_______/  \____  $$|_______/    \___/   \_______/|__/ |__/ |__/
#             /$$  | $$
#            |  $$$$$$/
#             \______/

# Installing core dependencies as root.
RUN pacman -Syu --noconfirm
RUN pacman -Sy --noconfirm sudo base-devel git
RUN echo "Set disable_coredump false" >> /etc/sudo.conf

# Creating a USER 'user', giving it sudo permissions and then switching to it.
RUN useradd -m user && usermod -L user
RUN echo "user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN echo "root ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
USER user

# Installing 'yay', an AUR helper for easier dev dependency management.
RUN cd ~ && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si --noconfirm
RUN cd ~ && rm -rvf yay && cd /app

#                                 /$$
#                                | $$
#    /$$$$$$   /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
#   /$$__  $$ |____  $$ /$$_____/| $$  /$$/ |____  $$ /$$__  $$ /$$__  $$ /$$_____/
#  | $$  \ $$  /$$$$$$$| $$      | $$$$$$/   /$$$$$$$| $$  \ $$| $$$$$$$$|  $$$$$$
#  | $$  | $$ /$$__  $$| $$      | $$_  $$  /$$__  $$| $$  | $$| $$_____/ \____  $$
#  | $$$$$$$/|  $$$$$$$|  $$$$$$$| $$ \  $$|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$/
#  | $$____/  \_______/ \_______/|__/  \__/ \_______/ \____  $$ \_______/|_______/
#  | $$                                               /$$  \ $$
#  | $$                                              |  $$$$$$/
#  |__/                                               \______/
#
#  Install particular dependecies with yay or pacman or anything else with sudo: 

RUN sudo pacman -Sy --noconfirm julia julia-docs

EXPOSE 4000