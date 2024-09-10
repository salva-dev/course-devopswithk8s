FROM alpine:3.20.0
WORKDIR /usr/app

RUN apk add nodejs npm

COPY ./src ./

# Use the non-root user
# RUN chown -R node:node .
# USER node

CMD [ "node", "main" ]