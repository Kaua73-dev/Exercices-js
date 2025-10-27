// exercicio 29



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