// exercicio 17 

function somaPreco (){

let array = [

{nome: 'jornal', categoria: 'informação', preco: 2},
{nome: 'valorant ', categoria: 'lazer', preco: 90},
{nome: 'notebook', categoria: 'trabalho', preco: 8000},
];

let resultado = 0;

for(let i = 0; i < array.length; i++){

resultado += array[i]['preco'];
}
return resultado;

};

console.log(somaPreco());