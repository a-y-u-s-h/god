FROM ubuntu

WORKDIR /app
ADD . /app

RUN apt-get update
RUN apt-get dist-upgrade -y
RUN apt-get install -y wget
RUN wget -P /julia/ "https://julialang-s3.julialang.org/bin/linux/x64/1.0/julia-1.0.2-linux-x86_64.tar.gz" --no-check-certificate
RUN cd /julia/ && tar -xvzf *.tar.gz
RUN cd /julia/julia* && mv * ../ && rm -rvf /julia/julia*/
RUN cd /julia/ && rm -rvf julia*.tar.gz
RUN cd /julia/bin && export PATH="$PATH:$(pwd)" && ln -s /julia/bin/julia /usr/local/bin/julia

EXPOSE 4000