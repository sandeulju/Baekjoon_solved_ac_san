const fs = require('fs');
const input=fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(e => Number(e));

let max = numbers[0];
let min = numbers[0];

for(let i=1; i<N; i++){
    if(max < numbers[i]){
        max = numbers[i];
    }

    if(min > numbers[i]){
        min = numbers[i];
    }
}

console.log(`${min} ${max}`)