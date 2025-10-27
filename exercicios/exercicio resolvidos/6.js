// exercicio 6


function inverte(){

let quest = prompt('Digite "true" ou "false" e veja o inverso ');


if(quest === 'true'){
    return 'false'
} else if(quest === 'false'){
    return 'true'
} else{
    return 'valor não reconhecido'
}

}


alert(inverte());