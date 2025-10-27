// exercicio 12

function comparar(objeto, elemento){

let copia = Object.assign(objeto)
delete copia[elemento]
return copia;
}


let tudo = {name: 'kaua', idade: 15, sexualidade: 'masculino'}
console.log(comparar(tudo, 'sexualidade'));