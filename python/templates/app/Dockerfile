FROM base/archlinux

WORKDIR /app
ADD . /app

RUN pacman -Syu --noconfirm
RUN pacman -Sy --noconfirm python
RUN pacman -Sy --noconfirm python-pip
RUN pip3 install -r requirements.txt

EXPOSE 4000