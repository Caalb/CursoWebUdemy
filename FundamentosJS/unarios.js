let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1; // Tem prioridade 
console.log(num1); 

console.log(++num1 === num2--);  // Vai dar true por conta que a igualdade está sendo lida primeiro do que o num2-- (2 === 2. Logo após que o num2 vai virar1)
console.log(num1 === num2); 