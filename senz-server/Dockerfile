FROM node

RUN mkdir -p /usr/senz/senz-server
WORKDIR /usr/senz/senz-server

COPY package.json /usr/senz/senz-server
RUN npm install
COPY . /usr/senz/senz-server
EXPOSE 7000
CMD ["npm", "start"]