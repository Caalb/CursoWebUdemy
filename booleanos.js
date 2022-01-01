let isAtivo = false; 
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; 
console.log(!!isAtivo); // Retorna o valor original, no caso 1 é verdadeiro. (Uma negação 2x)
console.log(!isAtivo); // Retorna o valor inverso, o que vai retornar falso. (Uma negação 1x)

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar');
console.log(('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'Desconhecido'); // Se colocar algum nome que retorna falso, a saída vai ser "Desconhecido".

nome = 'Lucas';
console.log(nome || 'Desconhecido');

