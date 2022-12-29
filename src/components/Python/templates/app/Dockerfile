FROM archlinux

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
RUN pacman-key --init >/dev/null 2>&1; exit 0
RUN pacman-key --refresh-keys >/dev/null 2>&1; exit 0
RUN pacman -Syu --noconfirm; exit 0
RUN pacman-db-upgrade; exit 0
RUN pacman -Sy --noconfirm sudo base-devel git; exit 0
RUN echo "Set disable_coredump false" >> /etc/sudo.conf

# Creating a USER 'user', giving it sudo permissions and then switching to it.
RUN useradd -m user && usermod -L user
RUN echo "user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN echo "root ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
USER user

# Installing 'yay', an AUR helper for easier dev dependency management.
RUN cd ~ && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si --noconfirm && cd ~ && rm -rvf yay && cd /app; exit 0
USER root
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

RUN pacman -Sy --noconfirm python; exit 0
RUN pacman -Sy --noconfirm python-pip; exit 0
RUN pip3 install -r requirements.txt; exit 0

EXPOSE 4000
