const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let arr = [];
let result = '';

rl.on('line', (x) => {
    arr = x.split(' ');

    const a = +arr[0];
    const b = +arr[1];

    if(a>b){
        result = '>';
    }else if(a<b){
        result = '<';
    }else if(a==b){
        result = '==';
    }

    console.log(result)

    rl.close();
});

rl.on('close', () => {
    process.exit();
});