'use strict';

// コマンドライン引数
// undifinedなら0を使う。  選択的代入
const number = process.argv[2] || 0;

//console.log(process.argv);
//console.log(number);

let sum = 0;

for(let i = 1; i <= number; i++) {
  sum = sum + i;
}

console.log(sum);
