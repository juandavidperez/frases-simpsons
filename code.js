const findQuote = (valor) => quotes.find(frase => frase.quote.toLowerCase().includes(valor.toLowerCase()));

const findCharacterQuotes = (nombre) => quotes.filter(frase => frase.character.includes(nombre));

module.exports = {
    findQuote,
    findCharacterQuotes
}
