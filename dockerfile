FROM node:latest

LABEL author="Joseph Niel Tuazon"

ENV APPDIR /srv

WORKDIR ${APPDIR}
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
