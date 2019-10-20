const express = require('express');
const app = express();

app.get('/olá', (req, res) => {
    res.status(200).send({ message: 'Oi, eu sou a rota Olá'});
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})
