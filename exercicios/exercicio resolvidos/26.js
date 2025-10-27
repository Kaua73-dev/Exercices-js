// exercicio 26


function inverteArray(obj){

let resultado = {};


for(let chave in obj){
    let invert = obj[chave];
    resultado[invert] = chave;
}

return resultado;

};

let inv = {a: 1, b: 2, c: 3};
let result = inverteArray(inv);


console.log(result);