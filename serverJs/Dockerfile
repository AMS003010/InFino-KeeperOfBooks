FROM node:17-slim

WORKDIR /app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 6000

CMD ["npm","start"]