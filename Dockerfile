FROM node:16.15.1

WORKDIR /app

COPY . .

RUN npm i yarn
RUN yarn install

CMD [ "yarn", "start" ]
