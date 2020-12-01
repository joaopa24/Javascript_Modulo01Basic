//Bom dia!
//João , esse erro é retornado quando se tenta executar um loop à partir de um "elemento" que não é um array.
//Por exemplo:

const name = 'Victor' // string tbm é "tipo de array"

for (let letter of name)
    console.log(letter)


const name = { text: 'Victor' } // agora é um objeto

for (let letter of name)
    console.log(letter)    