# build stage image
FROM node:14-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY .browserslistrc .eslintrc.js babel.config.js postcss.config.js vue.config.js ./
COPY src ./src
COPY public ./public

RUN npm run build

# runtime image
FROM node:26-alpine

# install tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app

COPY sdk-server/package.json sdk-server/package-lock.json ./
RUN npm ci

COPY sdk-server .
COPY src/assets/ads.json ./src/assets/ads.json
COPY --from=build /app/dist ./dist

EXPOSE 7062

CMD [ "node", "server.js" ]
