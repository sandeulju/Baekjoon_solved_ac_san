const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => Number(e));

let num = input[0];

for(let i=1; i<input.length; i++){
    if(num < input[i]){
        num = input[i]
    }
}

const N = Number(input.findIndex(e => e === num))+1;

console.log(`${num}\n${N}`)