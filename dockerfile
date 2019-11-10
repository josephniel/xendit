FROM node:latest

LABEL author="Joseph Niel Tuazon"

ENV APPDIR /srv
ENV MONGODB_USERNAME ${MONGODB_USERNAME}
ENV MONGODB_PASSWORD ${MONGODB_PASSWORD}
ENV MONGODB_HOST ${MONGODB_HOST}
ENV MONGODB_PORT ${MONGODB_PORT}

WORKDIR ${APPDIR}
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
