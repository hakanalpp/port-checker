# syntax=docker/dockerfile:1
FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install --production

COPY . /usr/src/app

CMD ["yarn", "start"]