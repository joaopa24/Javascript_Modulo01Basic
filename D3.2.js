const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function CalculaSaldo(receitas, despesas) {
    const Rec = Soma(receitas)
    const Des = Soma(despesas)
    return Rec - Des
}

function Soma(Valor){
    let soma = 0 
    for(let i = 0 ; i < Valor.length; i++){
        soma = soma + Valor[i]
    }
    return soma
}

for ( let i=0 ; i < usuarios.length; i++){
   const Loren = CalculaSaldo(usuarios[i].receitas , usuarios[i].despesas)
   if (Loren > 0){
       console.log(`O usuario ${usuarios[i].nome} tem salvo positivo de ${Loren.toFixed(2)} reais`)
   }
   else{
       console.log(`O usuario ${usuarios[i].nome} tem salvo negativo de ${Loren.toFixed(2)} reais`)
   }
}
