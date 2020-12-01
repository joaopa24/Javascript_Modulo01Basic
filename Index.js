const name = 'João Lucas'
console.log(name);

// Criar um programa que calcula a média
// das notas entre os alunos e enviar
// mensagem do cálculo da média 

//Objetos - Constantes com mais de uma propriedade

const teste = {
    nome:'Tywin',
    Casa:'Lannister'
}
console.log(`Lorde ${teste.nome} da casa ${teste.Casa}`)

//Array  - Constante que agrupa varios valores com propriedades dentro dela - Vetor
const Alunos = [
   {
    nome:"João",
    nota:7.8
   },
   {
    nome:"Lucas",
    nota:7.8
   },
   {
    nome:"Almeida",
    nota:7.8
   }
]

const media = (Alunos[0].nota + Alunos[1].nota + Alunos[2].nota) / 3
//condicional da média
console.log(media)
if (media > 5) {
    console.log(`Parabens Turma a Média foi de ${media}`)
}
else{
    console.log("A média foi menor que 5")
}

// Operadores relacionais e comparativos 
console.log ( 5 > 4 ) // true pq é maior 
console.log ( 5 < 4) // false pq é maior
console.log ( 5 >= 5) // true pq é igual a 5
console.log ( 5 <= 4) // false pq ele não é menor ou igual a 4 
console.log ( 5 != "5") // false pq ele não é diferente
console.log (5 !== "5") // true pq eles são de tipos diferentes , um é string(text) e um number
console.log (5 == "5") // true pq são de "valores" iguais , o tipo não influencia
console.log (5 === "5") // false porque eles são de tipos diferentes , um é string(text) e outro é number

//Desafio 1 Método sem Operadores Lógicos
//Evento Social , caso a pessoa tenha 18 anos , liberar entrada , se não tiver bloquear 
//Se a pessoa tiver 17 anos , pedir para voltar apenas quando fizer 18.

const idadePessoaEvento = 16
if (idadePessoaEvento >= 18) {
    console.log("Liberar Entrada")
}
else {
    console.log("Bloquear a Entrada")
}
if (idadePessoaEvento === 17) {
    console.log("Porfavor , volte quando tiver 18 anos")
}

//Desafio 1 Método usando Operadores Lógicos
//Evento Social , caso a pessoa tenha 18 anos , liberar entrada , se não tiver bloquear 

const idadePessoaEvento2 = 18
if (!(idadePessoaEvento2 >= 18) || idadePessoaEvento2 === 17) {
    console.log("Bloquear a Entrada")
}
else{
    console.log("Liberar a Entrada")
}
