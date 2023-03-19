

FROM node:18.15.0

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm","start"]