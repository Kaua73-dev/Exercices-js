// exercicio 18 



function media(array){


let soma = array.reduce(function(total, numero){
return total + numero; 


}, 0);


let media = soma / array.length
return media; 
}



console.log(media([1, 2, 3, 4, 4]))
