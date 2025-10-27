//exercicio 13 

function elemento(numeros){

let array = [];


for(let i = 0; i < numeros.length; i++){

let resultado = numeros[i]
if(typeof resultado === 'string'){
   array.push(resultado)
}
}

return array
}

console.log(elemento(['oi', 10, 'sim', 1]));