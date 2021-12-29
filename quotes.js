const quotes = [
    {
        character: 'Homero Simpson',
        quote: 'Normalmente no rezo, pero si estás ahí, por favor, ¡sálvame Superman!',
        video: 'https://youtu.be/WFgiCYNMeZ0?t=30',
        imagen: ''
    },
    {
        character: 'Bart Simpson',
        quote: '¿Qué te paso Viejo? Antes eras chévere',
        video: 'https://www.youtube.com/watch?v=-FBBo8ZY0PU',
        imagen: ''
    }
]

const findQuote = (valor) => quotes.find(frase => frase.quote.toLowerCase().includes(valor.toLowerCase()));

const findCharacterQuotes = (nombre) => quotes.filter(frase => frase.character.includes(nombre));
