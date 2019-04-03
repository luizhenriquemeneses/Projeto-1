'use strict'

const app = require('../Source/app')
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


const port = NormalizarPorta(process.env.port || '3000');
app.set('port', port);

const server = http.createServer(app);


server.listen(port);
server.on('listening', onListening);
console.log('API rodando na porta' + port);


//Função criada para normalizar a utilização das portas pelo servidor.
//Caso a porta utilizada pelo servidor esteja sendo utilizada, será utilizada a porta 3000.
function NormalizarPorta(val){
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}   


//Função criada para testar o funcionando do servidor.
//Ao ser chamado, deverá apresentar a porta no qual o servidor está rodando.
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe' +addr
        : 'port' +addr.port;
    debug('Listening on' +bind);

}