'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const quotes = require('./quotes.json');

// funciones para filtrar los datos
const findQuote = (valor) => {
    return quotes.filter(frase => frase.quote.toLowerCase().includes(valor.toLowerCase()));
}

const findCharacterQuotes = (name) => quotes.filter(frase => {
    const nameToLowerCase = name.toLowerCase();
    const characterNameToLowerCase = frase.character.toLowerCase();
    return characterNameToLowerCase.includes(nameToLowerCase);
});

app.use(cors());

app.get('/', (req, res) => {
    console.log(req.query);
  res.send('Hello World!');
})

app.get('/character', (req, res) => {
    const characterQuotes = findCharacterQuotes(req.query.name || '');
  res.json(characterQuotes);
})

app.get('/quote', (req, res) => {
    const quote = findQuote(req.query.quote || '');
  res.json(quote);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})