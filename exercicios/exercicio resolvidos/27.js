// exercicio 27;

function num(array, quantidade){


return array.filter(function(numero){
    return String(numero).length === quantidade
});


};


console.log(num([1, 22, 333, 4444], 3));