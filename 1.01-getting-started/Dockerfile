FROM node:18.19.1-alpine as build-stage
WORKDIR /usr/app

COPY ./src ./

# Use the non-root user
RUN  chown -R node:node .
USER node

CMD [ "node", "main" ]