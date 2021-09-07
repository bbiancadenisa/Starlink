FROM node:15.13-alpine
WORKDIR /dockerdemo
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
