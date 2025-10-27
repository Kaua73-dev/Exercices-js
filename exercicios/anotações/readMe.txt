usar os loops 

for = quando precisa do indice de cada menteleo 
for in = pecorrer propiedades de objetos, como chaves {}
for of = imprime cada elemento do indice sem se preocupar com indice; 



//

typeof = verifica o tipo do valor ( string, number..)
push = incrementa no array 

delete = deleta um item/objeto de uma determinada estrutura.
ex:
delete copia[elemento]




        // objetos : 
pode ser usado outros objetos, ou arrays. 

sendo chamado 
Ex:
console.log(name.idade.endereco);
// retornando endereco, que esta dentro de idade e name


        // funções e objetos, 
permitido criar funções dentro de objetos, sendo possivel simplificar. 



        // funções e objetos 2 
        ( ou função construtora);

a nomenclatura 'new' é usada para retornar a função com this. 
ex:
const produto = {
console.log(this)
}

produto()
// o new nao cria nova função, so retorna novo resultado dentro dos objetos da function; 
// sem o new, retorna : global
// com o new retorna : produto {}

ex 
new produto();

exemplo 


class data {
    constructor(dia, mes, ano){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
// class é um tipo de function constructor, que para passar os parametros precisar ultilzar
--->
constructor(exemplo, parametros){
    ....codigo
}

const d1 = new data(1, 1, 2025); // retorna = 1, 1, 2025 
const d2 = new data(20, 10, 2025); // retorna como nova data: 20, 10, 2025 
const d3 = new data(3, 2, 2025); // retorna como nova data: 3, 2, 2025


console.log(d1);
console.log(d2);
console.log(d3);


        // return dentro de objeto e função 



exx 

this.exibir = function(){
    return "resultado do return"
}

// o this.exibir é criado chamando funtion()
// e retorna o resultado; 



        //quando usar o this?????

**usado dentro da função para CHAMAR algo 

