const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e => Number(e));

let count = 0;

for(let i=0; i<7; i++){
    if(input[i]<input[i+1]){
        count++;
    }
}

if(count === 7){
    console.log('ascending')
}else if(count === 0){
    console.log('descending')
}else{
    console.log('mixed')
}


// 두번째 시도 - 이건 맞는거같은데 왜 틀릴까..?
// const ascend = input.sort((a,b) => a-b);
// const descend = input.sort((a,b) => b-a);

// for(let i=0, n=input.length; i<n; i++){
//     if(input[i] != ascend[i] || descend[i]){
//         console.log('mixed')
//     }else if(input[0] === 1){
//         console.log('ascending')
//     }else{
//         console.log('descending')
//     }
// }


// 첫번째 시도(날먹 실패)
// if(input === input.sort((a,b) => a-b)){
//     console.log('ascending')
// }else if(input === input.sort((a,b) => b-a)){
//     console.log('descending')
// }else{
//     console.log('mixed')
// }