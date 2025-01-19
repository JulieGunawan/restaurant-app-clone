FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs npm

COPY . /opt/src
RUN cd /opt/src && npm run dev


