FROM denoland/deno:alpine-1.46.1 AS build-stage
WORKDIR /app
COPY ./src ./src
COPY deno.* .
RUN deno task build

# (no hay manera de saber la version) 
# hadolint ignore=DL3006
FROM gcr.io/distroless/cc AS cc

FROM alpine:3.20.2
ENV SERVER_PORT=8888
EXPOSE ${SERVER_PORT}
WORKDIR /app

# Necesario para que se puede ejecutar ejecutables deno en alpine (por usar glibc creo...)
# Inspired by https://github.com/dojyorin/deno_docker_image/blob/master/src/alpine.dockerfile
COPY --from=cc --chown=root:root --chmod=755 /lib/*-linux-gnu/* /usr/local/lib/
COPY --from=cc --chown=root:root --chmod=755 /lib/ld-linux-* /lib/

RUN addgroup --gid 1000 deno \
  && adduser --uid 1000 --disabled-password deno --ingroup deno \
  && chown deno:deno /app \
  && mkdir /lib64 \
  && ln -s /usr/local/lib/ld-linux-* /lib64/

ENV LD_LIBRARY_PATH="/usr/local/lib"

# Use the non-root user
USER deno

COPY --from=build-stage /app/dist/server .

CMD ["sh", "-c", "./server"]