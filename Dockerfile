# Start with a node 10 image with package info

# Installs *all* npm packages and runs build script

FROM node:10-alpine as builder
RUN mkdir -p /app

WORKDIR /app

COPY [ "package.json", "package-lock.json", "/app/" ]

RUN npm ci

COPY [ ".", "/app/" ]

RUN npm run build


# Swaps to nginx and copies the compiled html ready to be serverd

# Uses a configurable nginx which can pass envionment variables to JavaScript

FROM robbj/configurable-nginx:0.1.0

COPY --from=builder /app/dist /usr/share/nginx/html