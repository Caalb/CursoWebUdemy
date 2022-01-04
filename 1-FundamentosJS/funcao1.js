function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3); 
imprimirSoma(2); // Vai dar NaN por conta que está somando um número inteiro com Undefined.
imprimirSoma(2, 10, 5, 4, 6, 8); // Vai somar somente os dois primeiros por conta que a função recebe apenas dois atributos
imprimirSoma(); // Vai dar NaN por.

function soma(a, b = 0) {  // Setou o 0 como número padrão para a váriavel B.
    return a + b
}
console.log(soma(2,3)); // Vai realizar a soma de 2 + 3. 
console.log(soma(2)) // Como b está setado como padrão o número 0, vai retornar 2 no console.
console.log(soma()) // Vai retornar NaN por conta que o primeiro parâmetro não foi definido.
