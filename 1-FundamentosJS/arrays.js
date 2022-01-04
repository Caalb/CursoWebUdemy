const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // Para acessar o primeiro e o terceiro elemento do array acima.
console.log(valores[4]); // Como o quarto elemento não existe neste array, vai dar undefined.

valores[4] = 10; // Acrescentar um indíce no array.
console.log(valores); 
console.log(valores.length); // Para acessar quantos elementos tem no array.

valores.push({id:3}, false, null, 'teste'); // Para adicionar indíces ao array.
console.log(valores);

console.log(valores.pop()); // Para retirar o ultimo ítem do array.
delete valores[0]; // Para deletar o índice 0 do array, no caso o primeiro.
console.log(valores);

console.log(typeof valores); // Para verificar qual o tipo do array.