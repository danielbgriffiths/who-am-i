# syntax=docker/dockerfile:1

FROM node:21-alpine

RUN npm install -g pnpm

WORKDIR ./app
COPY app .

RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

