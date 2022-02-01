const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio: todos os alunos são bolsistas?
// Desafio 2: Algum aluno é bolsista?

const todosBolsista = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado && bolsista) 
   
console.log(todosBolsista)

const algumBolsista = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado || bolsista)

console.log(algumBolsista)