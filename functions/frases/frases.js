"use strict";
const express = require("express");
const serverless = require("serverless-http");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// options get request
const options = {
  hostname: "https://elastic-beaver-cbfed9.netlify.app/quotes.json",
  port: 8080,
  path: "/",
  method: "GET",
};

let quotes;

const getQuotes = async () => {
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (data) => {
      quotes = data;
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
};

// funciones para filtrar los datos
const findQuote = (valor) => {
  return quotes.find((frase) =>
    frase.quote.toLowerCase().includes(valor.toLowerCase())
  );
};

const findCharacterQuotes = (name) =>
  quotes.filter((frase) => {
    const nameToLowerCase = name.toLowerCase();
    const characterNameToLowerCase = frase.character.toLowerCase();
    return characterNameToLowerCase.includes(nameToLowerCase);
  });

app.use(bodyParser);

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Hello World!");
});

app.get("/character", (req, res) => {
  const characterQuotes = findCharacterQuotes(req.query.name || "");
  res.json(characterQuotes);
});

app.get("/quote", (req, res) => {
  const quote = findQuote(req.query.quote || "");
  res.json(quote);
});

app.listen(port, () => {
  quotes = getQuotes();
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);
