console.log(Math.ceil(6.1)); // Arredonda o número inteiro para cima, enquanto o Math.floor arrendonda para baixo.

const obj1 = {}
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2' Outra maneira de se escrever.
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome            // O this. é para ficar visível globalmente.
    this.exec = function() {        
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec; 
