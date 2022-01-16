FROM node:16-alpine

WORKDIR /app

COPY package* .
COPY index.js index.js

RUN npm ci --no-audit --ignore-scripts

CMD [ "node", "index.js" ]
