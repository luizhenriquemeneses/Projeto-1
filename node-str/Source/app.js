//Inserido para aumentar o nível de critérios do JS.
'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//Método get sendo utilizado para envio de requisições para o servidor.
//Deverá ser retornado o status "200" caso obtenha sucesso.
const route = router.get('/', (req, res) => {
    res.status(200).send({
        title: "Utilização NODE.JS",
        version: "0.0.1"
    });
});

//Método post sendo utilizando para receber as informações do servidor.
//Deverá ser retornado o status "200" caso obtenha sucesso.
const create = router.post('/Cadastro', function (req, res, next) {

    var name = req.body.txtname;
    var foto = req.body.fotoaluno;
    var nasc = req.body.txtnascimento;
    var sexo = req.body.optsexo;
    var mae = req.body.txtmae;
    var pai = req.body.txtpai;
    var rg = req.body.txtrg;
    var tel = req.body.txttelefone;
    var email = req.body.txtemail;

});

//Método put sendo utilizado para alterar o valor de um determinado "id".
//Deverá ser retornado o status "200" caso obtenha sucesso.
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({ 
        id: id, 
        item: req.body 
    });
});

//Especifícações das rotas no qual os métodos citados serão utilizados.
app.use('/', route);
app.use('/cadastro', create);
// app.use('/cadastro', put);

module.exports = app;