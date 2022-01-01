const escola = "Cod3r";
console.log(escola.charAt(4)); // Pega o caractere 3 do código.
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(3)); // Código relacionado a tabela unicode (https://unicode-table.com/pt/)
console.log(escola.indexOf('3')); // Verificar se existe o indíce 3 no código.

console.log(escola.substring(1)); // Para exibir os caracteres posteriores ao número selecionado. (Od3r)
console.log(escola.substring(0, 3)); // Exibir do caractere 0 (C) até o 3(3) sem inclui-lo. (Cod)

console.log('Escola '.concat(escola).concat("!")); // Concatenar strings
console.log('Escola ' + escola + "!"); // Mesmo resultado de concatenação de strings.
console.log(escola.replace(3, 'e')); // Substitui o número selecionado para o caractere selecionado na segunda opção. (Coder)

console.log('Ana,Maria,Pedro'.split(',')); // Vai gerar um Array de três elementos separados por virgula.



