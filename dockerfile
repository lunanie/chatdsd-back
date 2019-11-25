# docker for create chat server
FROM node:latest

RUN mkdir /usr/src/server
WORKDIR  /usr/src/server

ADD package.json /usr/src/server/package.json

RUN npm install

ADD . /usr/src/server

CMD ["npm", "start"]