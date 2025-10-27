// exercicio 19 
//toFixed()


function area(){

let base = Number(prompt('Qual a base do triangulo?'));   
let altura = Number(prompt('Qual a altura do triangulo?'));   

let resultado = base * altura / 2
return alert(`A área do trinagulo é: ${resultado.toFixed(2)}`);


}

area();