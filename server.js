const express = require('express');
const helmet = require('helmet')

const apiRouter = require("./api/router.js");

const server = express();

// Global Middleware
server.use(express.json()); // built-in MW - no need to npm install it
// server.use(morgan("dev"));
server.use(helmet()); // free extra security. Always use it.

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {


}

module.exports = server;
