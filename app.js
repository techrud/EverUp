
const quote = [
    'this is really amazing',
    'you can make it',
    'aweh'
];


document.getElementById("quote").textContent = quote[Math.floor(Math.random() * quote.length)];