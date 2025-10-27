// exercicio 24



function array(palavra, arrayPalavra){
return arrayPalavra.filter(function(item){

return item.includes(palavra);

});
}


console.log(array('v', ['programação', 'pro-player', 'viajem', 'vou comprar picole']));
