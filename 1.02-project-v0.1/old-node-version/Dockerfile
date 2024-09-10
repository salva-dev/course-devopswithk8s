FROM alpine:3.20
EXPOSE 3000
WORKDIR /usr/app

RUN apk add nodejs npm

COPY ./src ./src
COPY ./*.json .
# RUN chown -R node:node .
# USER node

RUN npm install

# Use the non-root user
CMD [ "npm", "run", "start" ]
