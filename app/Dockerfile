FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm i -g nodemon \
    && npm install

COPY . .

EXPOSE 3000/tcp

ENTRYPOINT [ "npm", "start" ]




