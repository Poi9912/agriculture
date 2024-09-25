FROM node:lts-alpine3.20
WORKDIR /test
COPY package.json .
RUN npm i
COPY . .
CMD ["npm","run","test"]