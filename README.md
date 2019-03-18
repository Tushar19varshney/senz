# senz
 SenZ is a new kind of query language that can be used to communicate with IoT devices. It is easily integrable, incredibly fast, and is in the highest end of security integration.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7a4b5ceb254c46d18dcd7842e8b1d0bf)](https://www.codacy.com/app/Tushar19varshney/senz?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Tushar19varshney/senz&amp;utm_campaign=Badge_Grade)

[![Build Status](https://travis-ci.org/Tushar19varshney/senz.svg?branch=master)](https://travis-ci.org/Tushar19varshney/senz)

# User Guide

#### How to Setup

Clone the repository.

`git clone https://github.com/Tushar19varshney/senz.git`

Change directry to the folder.

`cd senz/`

And run npm install in both senz-client and senz-server folders.

```
 cd senz-server/
 npm install
 
 cd ..
 
 cd senz-client/
 npm install
```

#### How to Use

Start the mongodb server in your local machine

`sudo service mongod start`

Use two terminals, one for senz-server and the other fot senz-client.

start the npm server in both directories. use,

`npm start`

to start `nodemon` server instead of `node` server ,use

`npm run dev`

And use [localhost:3000](https://) to browse.

> **NOTE**: This version is only supporting for Chrome browser. And make sure to instal the extension -> Redux Dev Tools in chrome extension library.


### Running with Docker

1. Change the MongoDB uri to user local mongodb database url in *senz/senz-server/config/db_uri.js*.
    I have used online MongoDB `mlab`
2. In the root of the project directory, run `docker-compose build`
   - If you are on Linux machine, execute the following steps to install compose. 
     ```
     sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
     sudo chmod +x /usr/local/bin/docker-compose
     ```
3. Once build completes, run `docker-compose up`