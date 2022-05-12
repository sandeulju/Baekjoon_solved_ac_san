const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (x) => {

    let star = '';

    if(1<=x<=100){
    for(let i=1; i<=x; i++){
        star += '*'
        console.log(star)
    }
}

    rl.close();
});

rl.on('close', () => {
    process.exit();
})