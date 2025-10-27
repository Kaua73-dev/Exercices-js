// exercicio 28


function segundoMaior(array){


let maior = -Infinity
let segMaior = -Infinity


for(let i = 0; i < array.length; i++){

let numero = array[i]


if(numero > maior){
    segMaior = maior
    maior = numero


} else if(numero > segMaior && numero < maior){
    segMaior = numero
}
}

return segMaior;

}


console.log(segundoMaior([10, 20, 30, 100]));