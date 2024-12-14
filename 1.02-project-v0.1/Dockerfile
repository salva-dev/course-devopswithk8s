FROM alpine:3.21 AS base
RUN apk add --no-cache gcompat nodejs npm

FROM base AS builder
WORKDIR /app

COPY package*json tsconfig.json src ./

RUN npm ci && \
    npm run build && \
    npm prune --production

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1000 node
RUN adduser --system --uid 1000 node

COPY --from=builder --chown=node:node /app/node_modules /app/node_modules
COPY --from=builder --chown=node:node /app/dist /app/dist
COPY --from=builder --chown=node:node /app/package.json /app/package.json

USER node
EXPOSE 3000

CMD ["node", "/app/dist/index.js"]