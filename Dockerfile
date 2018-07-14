FROM node:8-alpine

ENV API_PORT 8888

WORKDIR /app
COPY . /app

RUN npm install --silent
RUN npm run build
CMD node server.js
