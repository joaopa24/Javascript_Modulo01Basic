//Calculo de IMC
const nome = "Lucas"
const peso = 95
const altura = 1.79

if( (peso/(altura*altura)) < 29.9 ) {
    console.log (`${nome} você não está acima do peso`)
}
else{
    console.log (`${nome} você está acima do peso`)
}
//Calculo de IMC - Outro Método
const imc = peso / (altura * altura)
if (imc < 29.9){
    console.log (`${nome} você não está acima do peso`)
}
else{
    console.log (`${nome} você está acima do peso`)
}

//Aposentadoria 
const nomeAp = "Almeida"
const sexoAp = "F"
const idadeAp = 60
const contribuiçãoAp = 30

if (sexoAp === "M" && (idadeAp+contribuiçãoAp) >= 95) {
   console.log(`Senhor ${nomeAp},você pode se aposentar!`)
}
else{
    if(sexoAp === "F" && (idadeAp+contribuiçãoAp) >=85) {
   console.log(`Senhora ${nomeAp},você pode se aposentar!`)
    }
    else{
    console.log(`Você não pode ser aposentar`)
    }
}
//Aposentadoria - Outro Método 
const ApHomem = sexoAp == "M" && idadeAp + contribuiçãoAp >= 95
const ApMulher = sexoAp == "F" && idadeAp + contribuiçãoAp >= 85

if( ApHomem || ApMulher){
    console.log(`${nomeAp},você pode se aposentar!`)
}
else{
    console.log(`${nomeAp},você pode se aposentar!`)
}