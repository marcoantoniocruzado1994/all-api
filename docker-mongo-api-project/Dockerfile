FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
# siempre para crear un nuevo proyecto de docker se usa docker build -t [nombre de tu proyecto en docker]