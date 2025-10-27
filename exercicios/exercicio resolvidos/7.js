
//exercicio 7

function media (minimo, numero, maximo, inclusivo){



if(minimo > maximo){
    let temp = minimo
    minimo = maximo
    maximo = temp
}


if( inclusivo === true ){
    return numero >= minimo && numero <= maximo
} else{
    return numero > minimo && numero < maximo
}



};

console.log(media(10, 50, 100))