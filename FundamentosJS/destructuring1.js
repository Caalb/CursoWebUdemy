const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // Está pedindo para retirar o nome e a idade do obejeto pessoa.
console.log(nome, idade);

const {nome: n, idade: i} = pessoa // Está associando o nome na váriavel n e idade na i.
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa // Quando está tentando acessar algo que não existe no objeto, retroan undefined, no caso do bemHumorada, vai retornar true.
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa // Está tentando acessar de endereço o logradouro, número e CEP, porém o CEP não existe.
console.log(logradouro, numero, cep);
