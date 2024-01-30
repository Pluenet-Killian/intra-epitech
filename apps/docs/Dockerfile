FROM node:latest

WORKDIR /usr/src/docs

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3001

CMD [ "pnpm", "run", "dev" ]
