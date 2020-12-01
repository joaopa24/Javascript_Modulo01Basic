const Usuario = {
  nome: "João",
  transição: [],
  saldo: 0
};

function CriarTransição(transição) {
  Usuario.transição.push(transição)
  if (transição.tipo === "credito") {
    Usuario.saldo = Usuario.saldo + transição.valor
  } else {
    Usuario.saldo = Usuario.saldo - transição.valor
  }
}

CriarTransição({ tipo: "credito", valor: 50 })
CriarTransição({ tipo: "credito", valor: 20 })
CriarTransição({ tipo: "credito", valor: 30 })
CriarTransição({ tipo: "debito", valor: 200 })
CriarTransição({ tipo: "debito", valor: 50 })
console.log(Usuario.saldo)

function MaiorValorTipo(tipo) {
  let MaiorN
  let Inicial = 0
  for (i = 0; i < Usuario.transição.length; i++) {
    if (Usuario.transição[i].valor > Inicial && Usuario.transição[i].tipo === tipo) {
      Inicial = Usuario.transição[i].valor
      MaiorN = Usuario.transição[i]
    }
  }
  return MaiorN
}
const Lol = MaiorValorTipo("credito")
const Lol2 = MaiorValorTipo("debito")
console.log(Lol)
console.log(Lol2)


function Mediatransaçao(Usuario) {
  let Soma = 0
  for (let i = 0; i < Usuario.transição.length; i++) {
    Soma = Soma + Usuario.transição[i].valor
  }
  const Media = Soma / Usuario.transição.length
  return Media
}

const Tok = Mediatransaçao(Usuario)
console.log(`A media de transações do cliente é de ${Tok.toFixed(1)} Reais`)

function Contar(Usuario){
  let count = {
    credito:0,
    debito:0
  }
  for(let i = 0; i < Usuario.transição.length; i++){
    if(Usuario.transição[i].tipo === "credito"){
      count.credito = count.credito + 1
    }else{
      count.debito = count.debito + 1
    }
  }
  return count
}
const Tik = Contar(Usuario)
console.log(Tik)