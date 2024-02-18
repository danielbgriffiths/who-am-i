# syntax=docker/dockerfile:1

FROM node:21-alpine
RUN npm install -g pnpm
WORKDIR ./app
COPY ./app .
RUN pnpm install
CMD ["pnpm", "serve"]
EXPOSE 8080