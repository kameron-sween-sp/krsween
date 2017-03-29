FROM node:latest
MAINTAINER @krsween

COPY . /var/www
WORKDIR /var/www

ENV NODE_ENV=production
ENV PORT=8080

VOLUME ["/var/www"]

RUN npm i

EXPOSE $PORT

ENTRYPOINT ["node", "docker_server"]
