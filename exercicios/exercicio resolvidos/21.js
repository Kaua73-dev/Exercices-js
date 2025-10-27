// exercicio 21 


function sorteio(){
//cria num aleatorio : 
let num = Math.floor(Math.random() * 10) + 1

let number = Number(prompt('Digite um número de 1 a 10 para ver se acertou!'))

if(num === number){
    alert(`Parábens, você acertou! O número foi: ${num}`)
} else if(num != number){
    alert(`Infelizmente você errou! O número foi: ${num}`)
} else{
    alert('Valor não reconhecido. Digite um número de 1 a 10 ')
}


}

sorteio();