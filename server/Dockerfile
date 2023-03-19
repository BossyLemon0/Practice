

FROM node:18.15.0

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD ["npm","start"]