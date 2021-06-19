FROM node:10.13.0-alpine AS build
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/dist/ngx-diff-test /usr/share/nginx/html
