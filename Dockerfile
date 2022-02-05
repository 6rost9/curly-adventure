
# image for building and developing web app on Vue as backend
# use LTS version of NodeJs

# use alpine for more quick development
#FROM node:16.13.0
FROM node:16.13.0-alpine

RUN apk update
    
#update npm
RUN npm install -g npm

# switch to user for developing 
# - in nodejs base docker file we already have a 1000 uid user = "node"
USER node
WORKDIR /home/node/frontend/

COPY . /home/node/frontend/

USER root
RUN npm i
USER node

