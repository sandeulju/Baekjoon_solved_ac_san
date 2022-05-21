const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input = ['5', '54321']

const initialValue = 0;
const numbers = input[1].split('').map(e => Number(e)).reduce((a,b) => a+b,initialValue);

console.log(numbers)
