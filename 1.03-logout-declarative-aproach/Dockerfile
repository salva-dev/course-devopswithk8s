FROM denoland/deno:1.46.1 AS build-stage
WORKDIR /app
COPY ./src ./src
COPY deno.* .
RUN chown deno:deno -R /app 
RUN chown deno:deno -R /deno-dir 
USER deno
RUN deno cache --reload ./src/server.ts
RUN deno compile --log-level=debug --strace-ops --output=./server ./src/server.ts


# FROM gcr.io/distroless/cc AS cc
# FROM alpine:3.20.0
# WORKDIR /usr/bin/app

# # Necesario para que se puede ejecutar ejecutables deno en alpine (por usar glibc creo...)
# # Inspired by https://github.com/dojyorin/deno_docker_image/blob/master/src/alpine.dockerfile
# COPY --from=cc --chown=root:root --chmod=755 /lib/*-linux-gnu/* /usr/local/lib/
# COPY --from=cc --chown=root:root --chmod=755 /lib/ld-linux-* /lib/

# RUN addgroup --gid 1000 deno \
#   && adduser --uid 1000 --disabled-password deno --ingroup deno \
#   && chown deno:deno /usr/bin/app \
#   && mkdir /lib64 \
#   && ln -s /usr/local/lib/ld-linux-* /lib64/

# ENV LD_LIBRARY_PATH="/usr/local/lib"

# # Use the non-root user
# USER deno

# COPY --from=build-stage /usr/src/app/server .

# CMD ["./server"]