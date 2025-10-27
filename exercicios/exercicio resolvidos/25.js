// exercicio 25

function consoantes(texto){
    let resultado = '';
    let vogais  = 'aeiou';



    for(let i = 0; i < texto.length; i++){

if(!vogais.includes(texto[i].toLowerCase())){
     resultado += texto[i];
}
 }

 return resultado;

}

console.log(consoantes('cod3r')) // return cd3r