FROM node:8

RUN mkdir -p /usr/senz/senz-client
WORKDIR /usr/senz/senz-client

ENV PATH /usr/app/node_modules/.bin:$PATH


COPY package.json /usr/senz/senz-client
RUN npm install --silent
COPY . .

EXPOSE 3000
CMD ["npm", "start"]