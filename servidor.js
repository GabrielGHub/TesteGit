const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo! Estou funcionando!'});
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})