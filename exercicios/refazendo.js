// exercicio 1 

// function saudacao(){

// let name = prompt('Qual seu Nome?')

// console.log(`Olá ${name}, seja bem-vindo(a)!`);


// }

// saudacao()


// exercicio 2 



// function idadeEmDias(){

// let age = Number(prompt('Digite sua idade em anos, para saber ela em dias:'));

// let resultado = age * 365.;
// return alert(`Sua idade em dias é: ${resultado}`);

// }


// idadeEmDias()




// exericico 3 


// function salario(horasM, horasD){


// let calculoSalario = horasM * horasD
// let desconto = calculoSalario - (calculoSalario * 0.30);
// console.log(desconto)
// }

// salario(150, 40);



// exercicio 4


// function mes(){

// let numeroMes = Number(prompt('Digite um **número** correspondente a um mês, e veja o resultado'))

// if(numeroMes === 1){
//     alert('Seu mes é janeiro')
// } else if(numeroMes === 2 ){
//     alert('Seu mes é fevereiro')
// } else if(numeroMes === 3 ){
//     alert('Seu mes é março')
// }else if(numeroMes === 4 ){
//     alert('Seu mes é abril')
// }else if(numeroMes === 5 ){
//     alert('Seu mes é maio')
// }else if(numeroMes === 6 ){
//     alert('Seu mes é junho')
// }else if(numeroMes === 7 ){
//     alert('Seu mes é julho')
// }else if(numeroMes === 8 ){
//     alert('Seu mes é agosto')
// }else if(numeroMes === 9 ){
//     alert('Seu mes é setembro')
// }else if(numeroMes === 10 ){
//     alert('Seu mes é outubro')
// }else if(numeroMes === 11 ){
//     alert('Seu mes é novembro')
// }else if(numeroMes === 12 ){
//     alert('Seu mes é dezembro')
// } else{
//     alert('valor não correspondido');
// }

// };


// mes() 





// exercicio 5 



// function primeiroMaior(a, b){

// if(a > b){
//     return 'true';
// } else {
//     return 'false'
// }



// };


// console.log(primeiroMaior(0, '0')) // false 
// console.log(primeiroMaior(1, 2)) // false 
// console.log(primeiroMaior(2, 1)) // true




// exercicio 6


// function inverte(){

// let quest = prompt('Digite "true" ou "false" e veja o inverso ');


// if(quest === 'true'){
//     return 'false'
// } else if(quest === 'false'){
//     return 'true'
// } else{
//     return 'valor não reconhecido'
// }

// }


// alert(inverte());




//exercicio 7



// function media (minimo, numero, maximo, inclusivo){



// if(minimo > maximo){
//     let temp = minimo
//     minimo = maximo
//     maximo = temp
// }


// if( inclusivo === true ){
//     return numero >= minimo && numero <= maximo
// } else{
//     return numero > minimo && numero < maximo
// }



// };

// console.log(media(10, 50, 100))




// exercicio 8 



// function Multiplica(a , b){

// let resultado = 0;


// for(let i = 0; i < b; i++){
// resultado += a
// }
// return resultado;
// }

// console.log(Multiplica(4, 5)); // 20





//exercicio 9 



// function elementoVezes(elemento, vezes){
// let resultado = Array(vezes).fill(elemento)
// return resultado;
// }


// console.log(elementoVezes('codigo', 3));



// exercicio 10 


// function numeros(num){

// let array = '';

// for(let i = 0; i < num; i++){
// array += '+'
// }

// return array;
// }


// console.log(numeros(5));


// exercicio 11


// function primeiroEUltimo(array){
// return [array[0], array[array.length - 1]];
// }
// console.log(primeiroEUltimo(['ola', 14, 'tudo bem?']));


// exercicio 12



// function comparar(objeto, elemento){

// let copia = Object.assign(objeto)
// delete copia[elemento]
// return copia;
// }


// let tudo = {name: 'kaua', idade: 15, sexualidade: 'masculino'}
// console.log(comparar(tudo, 'sexualidade'));





//exercicio 13 


// function elemento(numeros){

// let array = [];


// for(let i = 0; i < numeros.length; i++){

// let resultado = numeros[i]
// if(typeof resultado === 'string'){
//    array.push(resultado)
// }
// }

// return array
// }

// console.log(elemento(['oi', 10, 'sim', 1]));



// exercicio 14

//  function numerosEindicesPares(num){

// let arrayNum = [];

// for(let i = 0; i < num.length; i++){

// if(i % 2 === 0 && num[i] % 2 === 0){
//    arrayNum.push(num[i])
// }

// }

// return arrayNum

// }

// let result = [10, 70, 22, 43];
// let result2 = [1, 2, 3, 4];

// console.log(numerosEindicesPares(result))
// console.log(numerosEindicesPares(result2))



// exercicio 15 


// function bissexto(){

// let ano = Number(prompt('Digite um ano para saber se é bissexto ou não:'))

// if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
//     console.log('ano bissexto')
// } else{
//     console.log('ano normal')
// }


// }


// bissexto()



// exercicio 16 


// function somaArray(){

// let resultado = [10, 20, 10];



// let soma = resultado.reduce(function(a, b){
//     return a + b 

// })
// console.log(soma)

// }


// somaArray(); 




// exercicio 17 

// function somaPreco (){

// let array = [

// {nome: 'jornal', categoria: 'informação', preco: 2},
// {nome: 'valorant ', categoria: 'lazer', preco: 90},
// {nome: 'notebook', categoria: 'trabalho', preco: 8000},
// ];

// let resultado = 0;

// for(let i = 0; i < array.length; i++){

// resultado += array[i]['preco'];
// }
// return resultado;

// };

// console.log(somaPreco());




// exercicio 18 



// function media(array){


// let soma = array.reduce(function(total, numero){
// return total + numero; 


// }, 0);


// let media = soma / array.length
// return media; 




// }



// console.log(media([1, 2, 3, 4, 4]))




// exercicio 19 
//toFixed()


// function area(){

// let base = Number(prompt('Qual a base do triangulo?'));   
// let altura = Number(prompt('Qual a altura do triangulo?'));   

// let resultado = base * altura / 2
// return alert(`A área do trinagulo é: ${resultado.toFixed(2)}`);


// }

// area();



// exercicio 20 


// function menor(num){
//     return Math.min(...num);
// }

// console.log(menor([10, 5, 35, 65]));


// exercicio 21 


// function sorteio(){
// //cria num aleatorio : 
// let num = Math.floor(Math.random() * 10) + 1

// let number = Number(prompt('Digite um número de 1 a 10 para ver se acertou!'))

// if(num === number){
//     alert(`Parábens, você acertou! O número foi: ${num}`)
// } else if(num != number){
//     alert(`Infelizmente você errou! O número foi: ${num}`)
// } else{
//     alert('Valor não reconhecido. Digite um número de 1 a 10 ')
// }


// }

// sorteio();



// exercicio 22


// function contaPalavra(texto){

// return texto.split(' ').length
// }

// console.log(contaPalavra('sou uma frase'))



// exercicio 23;


// function soma(caractere, frase){
// return frase.split(caractere).length - 1;
// };

// console.log(soma("r", "A sorte favorece os audazes"));


// exercicio 24



// function array(palavra, arrayPalavra){
// return arrayPalavra.filter(function(item){

// return item.includes(palavra);

// });
// }


// console.log(array('v', ['programação', 'pro-player', 'Vovó', 'vou mudar de vida ano que vem!']));



// exercicio 25

// function consoantes(texto){
//     let resultado = '';
//     let vogais  = 'aeiou';



//     for(let i = 0; i < texto.length; i++){

// if(!vogais.includes(texto[i].toLowerCase())){
//      resultado += texto[i];
// }
//  }

//  return resultado;

// }

// console.log(consoantes('cod3r')) // return cd3r




// exercicio 26


// function inverteArray(obj){

// let resultado = {};


// for(let chave in obj){
//     let invert = obj[chave];
//     resultado[invert] = chave;
// }

// return resultado;

// };

// let inv = {a: 1, b: 2, c: 3};
// let result = inverteArray(inv);


// console.log(result);







// exercicio 27;

// function num(array, quantidade){


// return array.filter(function(numero){
//     return String(numero).length === quantidade
// });


// };


// console.log(num([1, 22, 333, 4444], 3));





// exercicio 28


// function segundoMaior(array){


// let maior = -Infinity
// let segMaior = -Infinity


// for(let i = 0; i < array.length; i++){

// let numero = array[i]


// if(numero > maior){
//     segMaior = maior
//     maior = numero


// } else if(numero > segMaior && numero < maior){
//     segMaior = numero
// }
// }


// return segMaior;

// }


// console.log(segundoMaior([10, 20, 30, 100]));



// exercicio 29



// function mediaNota(nota){
// let melhorAluno = ''
// let melhorMedia = -Infinity;



// //começa o for 
// for(let boletim in nota){
// let notaAluno = nota[boletim];
// let medio = notaAluno.reduce(function(total, atual){
// return atual + total
// }, 0) / notaAluno.length

// // compara com for

// if(medio > melhorMedia){
//     melhorMedia = medio
//     melhorAluno = boletim
// }
// } // termina o for:


// return { nome: melhorAluno, media: Number(melhorMedia.toFixed(3)) };

// }



// console.log(mediaNota({
// joao: [10, 8, 6.75],
// maria: [4.41, 10, 8, 9.1],
// pedro: [10, 11, 9.11, 2]

// }));