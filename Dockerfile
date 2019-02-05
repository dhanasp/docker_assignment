FROM node:11

WORKDIR /app

COPY package*.json /

CMD ["npm", "install"]

COPY ./ .

CMD [ "npm", "start" ]
