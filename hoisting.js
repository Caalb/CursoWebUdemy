                                // (var a) 
console.log('a = ', a);
var a = 2;                      // Neste caso ocorre o içamento (hoisting) da var. (a=2)
console.log('a = ', a);

console.log('b = ', b);
let b = 2;                      // Usando o let, o hoisting não acontece, o que vai gerar um erro no código.
console.log('b = '. b);
