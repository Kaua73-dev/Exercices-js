// exercicio 14

 function numerosEindicesPares(num){

let arrayNum = [];

for(let i = 0; i < num.length; i++){

if(i % 2 === 0 && num[i] % 2 === 0){
   arrayNum.push(num[i])
}

}

return arrayNum

}

let result = [10, 70, 22, 43];
let result2 = [1, 2, 3, 4];

console.log(numerosEindicesPares(result));
console.log(numerosEindicesPares(result2));