# build stage image
FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

WORKDIR /app/sdk-server

RUN npm ci

CMD [ "node", "server.js" ]
