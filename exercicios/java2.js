// function name(){

// let quest = prompt('Qual seu nome?')
// console.log(`Olá, ${quest}`);


// }

// name()



// function ConverterIdadeDias(){

// let quest = Number(prompt('Digite sua idade para converter em dias'))


// let resultado = quest * 365;
// console.log(`Sua idade em dias é: ${resultado}`)

// }

// ConverterIdadeDias();




// function salario(HorasM, HorasD){
    

// return HorasM * HorasD - ((HorasD + HorasM) * 0.30);

// }


// console.log(salario(150, 40));



// function mes(){

// let numero = Number(prompt('Digite um numero correspondente a um mes do ano:'))
 
// if(numero === 1){
//     console.log('Seu mes é janeiro ')
// } else if (numero === 2){
//     console.log('Seu mes é fevereiro ')
// } else if (numero === 3){
//     console.log('Seu mes é março ')
// } else if (numero === 4){
//     console.log('Seu mes é abril ')
// } else if (numero === 5){
//     console.log('Seu mes é maio ')
// } else if (numero === 6){
//     console.log('Seu mes é junho ')
// } else if (numero === 7){
//     console.log('Seu mes é julho ')
// } else if (numero === 8){
//     console.log('Seu mes é agosto ')
// } else if (numero === 9){
//     console.log('Seu mes é setembro ')
// } else if (numero === 10){
//     console.log('Seu mes é outubro ')
// } else if (numero === 11){
//     console.log('Seu mes é novembro ')
// } else if (numero === 12){
//     console.log('Seu mes é dezembro ')
// } else{
//     console.log('valor nao reconhecido')
// }


// }

// mes()


// function RetornaTrueFalse(a, b){

// if(typeof a !== 'number' || typeof b !== 'number'){
//     return false;
// }

// a >= b
// return true; 


// }

// console.log(RetornaTrueFalse(5, 1));


// function inverso(){
//     let quest = prompt('Digite true ou false e veja o inverso da operação:')


//     if(quest === 'true'){
//         console.log('false');
//     } else if(quest === 'false'){
//         console.log('true');
//     } else{
//         console.log('valor nao reconhecido.')
//     }
// }


// inverso();


// function intervalo(numero, minimo, maximo, inclusivo){

// if(minimo > maximo){
//     let temp = maximo 
//     minimo = maximo
//     maximo = temp
// }


// if(inclusivo === true){
//     return numero >= minimo && numero <= maximo;
// } else{
//     return numero > minimo && numero < maximo;
// }


// }

// console.log(intervalo(10, 100, 50));
// console.log(intervalo(16, 100, 16));
// console.log(intervalo(3, 150, 3));
// console.log(intervalo(3, 150, 3, true));






// let data = {
//     dia: 20,
//     mes: 10,
//     ano: 2025,
   
// }

// console.log(`${data.dia}/${data.mes}/${data.ano}`);

// class data {
//     constructor(dia, mes, ano){
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }


// const d1 = new data(1, 1, 2025); // retorna = 1, 1, 2025 
// const d2 = new data(20, 10, 2025); // retorna como nova data: 20, 10, 2025 
// const d3 = new data(3, 2, 2025); // retorna como nova data: 3, 2, 2025


// console.log(d1);
// console.log(d2);
// console.log(d3);




// class Pessoa {
//     constructor(name, idade, sexualidade ){
//         this.name = name;
//         this.idade = idade;
//         this.sexualidade = sexualidade;
        
//     }
//     exibir(){
//         return `Seu nome é: ${this.name}, sua idade: ${this.idade}, e sua sexualidade: ${this.sexualidade}`
//     }
// };

// const pessoa1 = new Pessoa('kaua', 15, 'masculino');
// const pessoa2 = new Pessoa('lindomar', 68, 'feminino');
// const pessoa3 = new Pessoa('ana helena', 3, 'feminino');
// const pessoa4 = new Pessoa('João pedro', 3, 'masculino');

// console.log(pessoa1.exibir());
// console.log(pessoa2.exibir());
// console.log(pessoa3.exibir());
// console.log(pessoa4.exibir());




// function somaArray(array){


// let soma = array.reduce(function(total, numero){
// return total + numero;

// }, 0);


// let resultado = soma / array.length

// return resultado;


// }

// console.log(somaArray([1, 2, 3, 4, 4])); // 2.8



// function area(){

// let area = Number(prompt('Qual a área do triangulo?'));
// let altura = Number(prompt('Qual a altura do triangulo?'))

// let resultado = (area * altura) / 2; 

// return  resultado
// }

// console.log(area());


// function menorNum(array){

// return Math.min(...array);
// };

// console.log(menorNum([10, 1, 20, 30]));
// console.log(menorNum([10, -1, 20, 30]));
// console.log(menorNum([100, -100, -200, - 199]));




// function numeroSorte(){

// let number = Math.floor(Math.random() * 10) + 1;

// let num = Number(prompt('Digite um numero de 1 a 10, e veja '));


// if(num === number){
//     alert(`Parabéns, o número sorteado foi ${number}`);
// } else if (num != number){
//     alert(`Que pena! O número sorteado foi ${number}, tente outra vez:`);
// } else{
//   alert('valor não reconhecido, digite um número de 1 a 10.');
// }
// }


// numeroSorte();




// function contaString(texto){
//     return texto.split(' ').length;
// }

// console.log(contaString("Sou uma frase"));





// function contaCaractere(caractere, frase){
// return frase.split(caractere).length - 1;

// }


// console.log(contaCaractere("r", "A sorte favorece os audazes"));





// function filtrar(palavra, arrayStrings){

// return arrayStrings.filter(function(item){
// return item.includes(palavra);
// });
// }


// console.log(filtrar('pro',  ["programação", "mobile", "profissional"]));







// function vogais(texto){

// let resultado = ''
// let vogal = 'aeiou';


// for(let i =0; i < texto.length; i++){
// if(!vogal.includes(texto[i].toLowerCase())){
//     resultado += texto[i];
// }
// }

// return resultado


// }


// console.log(vogais('cod3r'));






// exercicio 26 

// function inverterArray(obj){

// let novoObjeto = {};

// for(let chave in obj){
//     let valor = obj[chave]
//     novoObjeto[valor] = chave; 
// }

// return novoObjeto;

// }

// const original = {a: 1, b: 2, c: 3};
// const inverter = inverterArray(original);

// console.log(inverter);






// function inverterArray(obj){

// let array = {};


// for(let chave in obj){
// let valor = obj[chave];
// array[valor] = chave;
// }

// return array;

// }


// const original = {a: 1, b: 2, c: 3};
// const resultado = inverterArray(original);



// console.log(resultado);





// function arrayInverte(obj){

// let array = {};



// for(let chave in obj){
// let valor = obj[chave];
// array[valor] = chave;
// }

// return array; 

// }


// const variavel = {a: 1, b: 2, c: 3};
// const resultado = arrayInverte(variavel);


// console.log(resultado);



// function inverteArray(obj){
// let array = {};


// for(let chave in obj){
// let valor = obj[chave];
// array[valor] = chave;
// }


// return array;

// }


// const grupo = {a: 1, b: 2, c: 3};
// const resultado = inverteArray(grupo);



// console.log(resultado);


// function filtrar(array, quantidade){

// return array.filter(function(numero){
// return String(numero).length === quantidade

// });





// };


// console.log(filtrar([30, 10, 3103, 1, 2, 5, 6,], 4));






// function verifica(array, quantidade){

// return array.filter(function(numero){
// return String(numero).length === quantidade
// });

// };



// console.log(verifica([10, 2, 100, 3, 4], 1));



// function verifica(array, quantidade){
// return array.filter(function(numero){
// return String(numero).length === quantidade;
// })


// };


// console.log(verifica([10, 1000, 1, 3], 1));


// function segundoMaior(array){


// let maior = -Infinity;
// let segundoMaior = -Infinity;



// for(let i = 0; i < array.length; i++){

// let numero = array[i];


// if(numero > maior){
//     segundoMaior = maior; 
//     maior = numero 

// } else if(numero > segundoMaior && numero < maior){
//     segundoMaior = numero;
// }

// }


// return segundoMaior;
// };


// console.log(segundoMaior([12, 16, 1, 5])); // 12
// console.log(segundoMaior([8, 4, 5, 6]));   // 6


// function maiorSegundo(array){

// let maior = -Infinity;  
// let segundoMaior = -Infinity ;  

// for(let i = 0; i < array.length; i++){

// let numero = array[i];

// if(numero > maior ){
//     segundoMaior = maior
//     maior = numero
// } else if (numero > segundoMaior && numero < maior){
//     segundoMaior = numero;
// }




// }// terminar for 

// return segundoMaior;
// };



// console.log(maiorSegundo([12, 16, 1, 5]))







function mediaNota(nota){
let melhorAluno = ''
let melhorMedia = -Infinity;



//começa o for 
for(let boletim in nota){
let notaAluno = nota[boletim];
let medio = notaAluno.reduce(function(total, atual){
return atual + total
}, 0) / notaAluno.length

// compara com for

if(medio > melhorMedia){
    melhorMedia = medio
    melhorAluno = boletim
}
} // termina o for:


return { nome: melhorAluno, media: Number(melhorMedia.toFixed(3)) };

}



console.log(mediaNota({
joao: [10, 8, 6.75],
maria: [4.41, 10, 8, 9.1],
pedro: [10, 11, 9.11, 2]

}));
 