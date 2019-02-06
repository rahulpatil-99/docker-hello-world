FROM node:latest

WORKDIR /var/hello-world

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]