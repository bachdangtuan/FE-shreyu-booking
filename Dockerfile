FROM node:14.17-alpine as build
WORKDIR /app

RUN npm install -g @angular/cli@13.1.4

COPY ./package.json .
RUN yarn install
COPY . .
RUN ng build

FROM nginx

COPY ./etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/shreyu-angular /usr/share/nginx/html

EXPOSE 80
