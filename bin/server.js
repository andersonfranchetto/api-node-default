'use strict'
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('default-node:server');

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log(`Aplicação rodando na porta: ${port} `);

function normalizePort (val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
}