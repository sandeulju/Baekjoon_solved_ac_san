const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line",(x) => {
    input = x.split(' ');
    rl.close();
});

rl.on("close",() => {

    let A = parseInt(input[0]);
    let B = parseInt(input[1]);
    

    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(Math.floor(A/B));
    console.log(A%B);
    
    process.exit();
});