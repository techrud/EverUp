
const quote = [
    '"Talk is cheap show me the code"',
    '"there is no place like 127.0.0.1"',
    '“ Code is like humor. When you have to explain it, it’s bad.”',
    '“Make it work, make it right, make it fast.” – Kent Beck',
    '“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov',
    '"A good programmer looks both ways before crossing a one-way street."',
    '"It works on my machine."',
    '"Computers make very fast, very accurate mistakes."',
    '"Keyboard not found...Press any key to continue."',
    '"There’s no test like production."',
    '"Let’s call it an accidental feature."',
    '"The best thing about a boolean is even if you are wrong, you are only off by a bit."',
    '"Hey! It compiles! Ship it!"',
    '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."',
    '"Java is to JavaScript what Car is to Carpet."',
    '"Just don’t create a file called -rf."',
    '"The problem with troubleshooting is that trouble shoots back."',
    '"When in doubt, leave it out."',
    '"Developer: an organism that turns coffee into code."'
];

document.getElementById("quote").textContent = quote[Math.floor(Math.random() * quote.length)];