
//exercicio 1 
// let name = 'kauã';

const { StrictMode } = require("react")



// function ola(name){
//     console.log(`Olá, ${name}!`);
// }
// ola(name);



// exercicio 2 

// let age = 15;

// function ConverteAnosParaDias(age){

// let soma = age * 365;

// console.log(soma);



// }

// ConverteAnosParaDias(age);



// exercicio 3 

// function salario(horasM, horasD){

// let calculo = horasM * horasD - ((horasD + horasM) * 0.30)
// console.log(calculo)

//  };
// salario(150, 30)


//exercicio 4

// function NumMes(){

// let mes = Number(prompt('Digite um numero correspondente a cada mes:'));

// if(mes === 1){
//     console.log('Seu mês é: janeiro ')
// } else if(mes === 2){
//      console.log('Seu mês é: fevereiro ')
// } else if(mes === 3){
//      console.log('Seu mês é: março ')
// } else if(mes === 4){
//      console.log('Seu mês é: abril ')
// } else if(mes === 5){
//      console.log('Seu mês é: maio ')
// } else if(mes === 6){
//      console.log('Seu mês é: junho ')
// } else if(mes === 7){
//      console.log('Seu mês é: julho ')
// } else if(mes === 8){
//      console.log('Seu mês é: agosto ')
// } else if(mes === 9){
//      console.log('Seu mês é: setembro ')
// } else if(mes === 10){
//      console.log('Seu mês é: outubro ')
// } else if(mes === 11){
//      console.log('Seu mês é: novembro ')
// } else if(mes === 12){
//      console.log('Seu mês é: dezembro ')
// } else{
//     (console.log('Valor não reconhecido.'))
// }
// }

// NumMes();



// exercicio 5 

// function NumMaior(num1, num2){

// if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
//     return false;
// }

// num1 >= num2
// return true;
// } 

// console.log(NumMaior(10, 9))
// console.log(NumMaior(10, '9'))
// console.log(NumMaior('10', 9)) 



// exercicio 6 

// function TrueFalse(){

// let quest = prompt('Seu valor é true ou false?');

// if(quest === 'true'){
//     return 'false';
// } else if(quest === 'false'){
//     return 'true';
// } else {
//     alert('valor não reconhecido');
// }
    
      

    

// }


// alert(TrueFalse());




//exercicio 7 


// function estaEntre (numero, minimo, maximo, inclusivo){
//     // primeiro tem que estar entre o minimo e o maximo; 


//     if (minimo > maximo) {
//     let temp = minimo;
//     minimo = maximo;
//     maximo = temp;
// }


// if(inclusivo === true){
//    return numero >=  minimo&& numero <= maximo
        
    
// } else{
//     return  numero > minimo && numero < maximo
         
// }
    
    
// }

// console.log(estaEntre(10, 5, 50, false))




// exercicio 8 

// function Multiplica(a, b){
// let resultado = 0; 

// for(let i = 0; i < b; i++ ){
//     resultado += a;
// }
// return resultado;

// }

// console.log(Multiplica(7, 5));




// exercicio 9

// function Elemento(elemento, vezes){
     

// let resultado = Array(vezes).fill(elemento);
// return resultado;
// }


// console.log(Elemento('codigo' , 3));
// console.log(Elemento(7 , 7));



// exercicio 10 


// function transformaString(numero){

// let resultado = '';

// for(let i = 0; i < numero; i++ ){
// resultado += '+'
// }


// return resultado;

// }

// console.log(transformaString(10));



// exercicio 11

// function retornaUltimoPrimeiro(array){
//  return[array[0], array[array.length - 1]];
// }
// console.log(retornaUltimoPrimeiro([10, 2, 'porra de jegue']));



// exercicio 12

// function comparar(objeto, elemento){

// let copia = Object.assign(objeto)
// delete copia[elemento]
// return copia; 



// }



// let tudo = {name: 'kaua', idade: 15, sexualidade: 'masculino'}
// console.log(comparar(tudo, 'sexualidade'));



// exercicio 13



// function somenteNum(elemento){

// let numeros = [];

// for(let i = 0; i < elemento.length; i++){
//     let resultado = elemento[i];
//     if(typeof resultado === 'number'){
//         numeros.push(resultado);
//     }
// }
// return numeros;
// }






// console.log(somenteNum(["Javascript", 1, "3", "Web", 20])); 
// console.log(somenteNum([ 1, 3, "Web", 20]));



// function objetoParaArray(RecebeObjeto) {
  
// let lista = [];


// for (let chave in RecebeObjeto){
//     let valor = RecebeObjeto[chave];
//     lista.push([chave, valor]);
// }
// return lista;

// }


// console.log(objetoParaArray({nome: 'maria', trabalho: 'dev'}));





// function NumParesEIndeces(numero){

// let arr = [];


// for(let i = 0; i < numero.length; i++){
//     if(i % 2 === 0 && numero[i] % 2 === 0){
//     arr.push(numero[i]);
//     }

// }

// return arr;


// }

// let result = [10, 70, 22, 43];
// let result2 = [1, 2, 3, 4];
// console.log(NumParesEIndeces(result));
// console.log(NumParesEIndeces(result2));


// function Bissexto(){

// let number = Number(prompt('Digite um ano para saber se é bissexto ou não:'));

// if(number % 4 === 0 && number % 100 === 0 && number % 400 === 0) {
//     alert('ano bissexto'); 
// } else if(number % 4 === 0 && number % 100 === 0 && number % 400 !== 0){
//     alert('ano normal'); 
// } else if(number % 4 === 0 && number % 100 !== 0 && number % 400 !== 0){
//      alert('ano bissexto'); 
// } else if(number % 4 !== 0){
//     alert('ano normal'); 
// } else{
//     alert('valor inserido incorretamente!')
// }
  






// };

// Bissexto();


// let array = [10, 20, 30]

// let numbers = array.reduce(function(a, b){
//   return a + b; 
// })
// console.log(numbers)





// function totalDespesas(){

// let array = [
// {nome: 'jornal online', categoria: 'Informação', preco: 89.90},
// {nome: 'jogos online', categoria: 'lazer', preco: 89.90},
// {nome: 'cinema ', categoria: 'lazer', preco: 100},
// ];

// let resultado = 0;

// for(let i = 0; i < array.length; i++){
// resultado += array[i]['preco'];
// }

// return resultado;

// }


// console.log(totalDespesas());



// function somaArray(array){


// let soma = array.reduce(function(total, numero){
// return total + numero;

// }, 0);


// let resultado = soma / array.length

// return resultado;


// }

// console.log(somaArray([1, 2, 3, 4, 4])); // 2.8



function inverterArray(obj){

let array = {};


for(let chave in obj){
let valor = obj[chave];
array[valor] = chave;
}

return array;
}


const original = {a: 1, b: 2, c: 3}
const resultado = inverterArray[original];



console.log(resultado);