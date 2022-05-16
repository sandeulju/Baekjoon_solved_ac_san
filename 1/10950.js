const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('10950.txt').toString().trim().split('\n');

// input = ['5','1 1','2 3','3 4','9 8','5 2']

// let a, rest
// [a, ...rest] = input

// console.log(rest)

// const result = input.slice(1)
const answer = [];

for(let i=1; i<input.length; i++){
    let numbers = input[i].split(' ');

    console.log(Number(numbers[0])+Number(numbers[1]))
}

// console.log(answer)
// 나름 정말 많은 일이 있었다.. 여러가지 시도를 했다......