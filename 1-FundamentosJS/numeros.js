const peso1 = 1.1;
const peso2 = Number('2');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Verifica se o Number é inteiro.

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 * avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  // Coloca duas casas decimais ao número selecionado.
console.log(media.toString());  // Converte o número para uma string.
console.log(typeof media); // Verifica o tipo.
