const AlunosTA = [
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
 const AlunosTB = [
    {
     nome:"Afonso",
     nota:7.8
    },
    {
     nome:"Pereira",
     nota:7.8
    },
    {
     nome:"Ultred",
     nota:7.8
    },
    {
        nome:"Ultred",
        nota:9.8
       }
 ]
 function Calcularmedia(Alunos) {
     let soma = 0;
     for (let i = 0; i < Alunos.length; i++){
         soma = soma + Alunos[i].nota
     }
     const media = soma / Alunos.length
     return media
}
const media1 = Calcularmedia(AlunosTA)
const media2 = Calcularmedia(AlunosTB)

function enviaM(media, turma) {
 if (media > 5) {
     console.log(`Parabens Turma ${turma} a Média foi de ${media}`)
 }
 else{
     console.log(`A média da turma ${turma} foi menor que 5`)
 }
}

enviaM(media1, 'TurmaA')
enviaM(media2, 'TurmaB')