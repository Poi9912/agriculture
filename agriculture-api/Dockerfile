FROM node:lts-alpine3.20
WORKDIR /api
COPY . .
RUN npm i
RUN npm run build
CMD ["npm","run","start"]
EXPOSE 3000