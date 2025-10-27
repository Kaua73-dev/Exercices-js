// exercicio 15 


function bissexto(){

let ano = Number(prompt('Digite um ano para saber se é bissexto ou não:'))

if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    console.log('ano bissexto')
} else{
    console.log('ano normal')
}


}


bissexto();