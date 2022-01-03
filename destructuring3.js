function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40};
console.log(rand(obj)); // Criando uma varível para realizar um processo. 
console.log(rand({min: 955}));  // Utilizando a forma de destructuring.
console.log(rand({}));
console.log(rand());