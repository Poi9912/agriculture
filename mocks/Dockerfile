FROM node:lts-alpine3.20
WORKDIR /data
COPY package.json .
RUN npm i
COPY . .
CMD [ "npm","run","start" ]