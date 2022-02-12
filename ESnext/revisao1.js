// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)  // o var foge do escopo do bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é 
caro`)

// Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]  // Para pegar o elemento de indice 0 e pular o de indice 1 e pegar de indice 2
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9} // Para pegar um elemento do objeto 
console.log(i, nome)