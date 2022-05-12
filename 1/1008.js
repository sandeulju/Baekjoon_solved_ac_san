const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on("line", (x) => {
    arr = x.split(' ');

    const A = arr[0];
    const B = arr[1];

    const answer = A/B;
    console.log(answer);

    rl.close();
});

rl.on("close", () => {
    process.exit();
});

// fs 시도
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// const A = input[0];
// const B = input[1];

// const answer = A/B
// console.log(answer)

