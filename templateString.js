const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`; // Para utlização de uma váriavel dentro de uma frase por ex.
const template2 = `
    Olá                 
    ${nome}!`  // Para mostrar que a crase respeita a alteração de linha e os espaços no código.

console.log(concatenacao, template, template2);
console.log(nome);

// expressoes...

console.log(`1 + 1 = ${1 + 1 }`);
const up = texto => texto.toUpperCase(); // Esta função "up" deixa o texto selecionado em maiúsculo.
console.log(`Ei... ${up('cuidado')}!`); // Exemplo de como a função deve ser utilizada.
