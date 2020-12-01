//Desafio Sobre objetos
Empresa = {
     nome:"Rocketseat",
     cor:"Roxo",
     Foco:"Programação",
     Endereço: {
         Rua:"Rua Guilherme Gembala",
         Número:260
     }
}
console.log(`A empresa ${Empresa.nome} está localizada na ${Empresa.Endereço.Rua} número ${Empresa.Endereço.Número}`)

//Vetores ou Arrays
Programador = {
    nome:"Carlos",
    idade:32,
    tecnologias: [
        {nome:"C++", especialidade:"Desktop"},
        {nome:"Python", especialidade:"Data Sience"},
        {nome:"JavaScript",especialidade:"Web/Mobile"}
    ]
}

console.log(`O programador ${Programador.nome} tem ${Programador.idade} anos e usa a tecnologia ${Programador.tecnologias[0].nome} com especialidade em ${Programador.tecnologias[0].especialidade}`)