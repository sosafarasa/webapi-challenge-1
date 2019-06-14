const express = require('express');
const server = express();

//--

const projectsRouter = require('./data/projectsRouter');
// const actionsRouter = require('./data/actionsRouter');

//--


server.use(express.json());

//--

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Hello there! Your server is running.</h1>`);
})

module.exports = server;