FROM node:15.13-alpine
WORKDIR /dockerdemob
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install nodemon -g --save
COPY . .
CMD ["nodemon", "index.js"]