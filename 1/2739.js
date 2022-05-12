const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    let result = '';

rl.on('line', (x) => {
    
    for(let i = 1; i<10; i++){
        result = `${x} * ${i} = ${x*i}`;
        console.log(result)
    }

    rl.close();
});

rl.on('close', () => {
    process.exit();
})