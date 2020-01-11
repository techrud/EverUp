
const quote = [
    '"Talk is cheap show me the code"',
    '"there is no place like 127.0.0.1"',
    '“ Code is like humor. When you have to explain it, it’s bad.”',
    '“Make it work, make it right, make it fast.” – Kent Beck',
    '“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov'
];

document.getElementById("quote").textContent = quote[Math.floor(Math.random() * quote.length)];