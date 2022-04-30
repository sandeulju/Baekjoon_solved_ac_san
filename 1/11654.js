const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = []

rl.on("line", (x)=>{
    input.push(x)
    rl.close();
});

rl.on("close", ()=>{
    const str = input[0];
    const answer = str.charCodeAt(0);
    
    console.log(answer);
    process.exit();
});