FROM node:lts-alpine3.20 AS builder
WORKDIR /api
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM node:lts-alpine3.20 AS runner
WORKDIR /api
COPY --from=builder /api/package.json ./
COPY --from=builder /api/package-lock.json ./
COPY --from=builder /api/next.config.js ./
COPY --from=builder /api/public ./public
COPY --from=builder /api/.next/standalone ./
COPY --from=builder /api/.next/static ./.next/static

EXPOSE 3000
CMD ["node","server.js"]