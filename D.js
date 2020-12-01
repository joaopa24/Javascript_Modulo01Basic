

//Parte I - Imprimir informações com uma estrutura de repetição
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Lucas", tecnologias: ["HTML", "Node.js"] },
    { nome: "Lucas", tecnologias: ["HTML", "Node.js"] }
]

function procurar(usuarios) {
    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
    }

}
// procurar(usuarios)
// Parte II - Procurar o usuario pela técnologia 
// function Verif(usuario){
//   for (let Tecnologia of usuario.tecnologias){
//      if(Tecnologia == "CSS"){
//          return true
//      }
//  }
//   return false
// }

// for(let usuario of usuarios){
//     const Users = Verif(usuario)
//    if(Users){
//         console.log(`O Usuario ${usuario.nome} trabalha com CSS`)
//     }
// }




// Revisão do Desafio 3 de javascript - introdução a web
// Observações -- Quando o return false estava dentro do for , a função simplesmente não funciona
// Quando eu tentava usar a função verif diretamente nos usuarios dava erro

for(let usuario of usuarios){
    if(usuario.nome == "Lucas"){
        console.log(usuario)
    }
}