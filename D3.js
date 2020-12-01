//Parte I - Imprimir informações com uma estrutura de repetição
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Lucas", tecnologias: ["HTML", "Node.js"] }
  ]

function procurar(usuario) {
    for ( let i = 0; i < usuario.length; i++){
    console.log(`${usuario[i].nome} trabalha com ${usuario[i].tecnologias}`)
    }
    
}
procurar(usuarios)
//Parte II - Procurar o usuario pela técnologia 
function Verif(usuario){
  for(let i=0; i < usuario.tecnologias.length; i++){
    if(usuario.tecnologias[i] == "CSS"){
      return true
    }
  }
  return false
}

for(let i=0; i < usuarios.length; i++){
  const UsaCSS = Verif(usuarios[i])
  if(UsaCSS){
    console.log(`O Usuario ${usuarios[i].nome} trabalha com CSS`)
  }
}