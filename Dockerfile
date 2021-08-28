FROM node:12-alpine

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9001
CMD [ "node", "index.js" ]