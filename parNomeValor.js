const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao 
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(cliente);

