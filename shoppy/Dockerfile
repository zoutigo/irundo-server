FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install && \
    rm -rf /tmp/* /var/tmp/*


COPY . /app

RUN npm run build

ENV DOCKER=ENABLE
EXPOSE 8100
USER node

CMD npm run start:dev