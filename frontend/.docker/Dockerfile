FROM node:16-alpine as build

WORKDIR /build

COPY src src
COPY angular.json .
COPY package* .
COPY tsconfig* .

RUN npm ci --no-audit --ignore-scripts
RUN npm run build

FROM nginx

COPY --from=build /build/dist/frontend /usr/share/nginx/html

