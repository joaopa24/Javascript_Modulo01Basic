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
    }
 ]
 function Calcularmedia(Alunos) {
     return media = (Alunos[0].nota + Alunos[1].nota + Alunos[2].nota) / 3
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

// quando você for executar a função , a variavel que você especificar vai ser substituida no
//parametro(vai trocar com o parametro)
