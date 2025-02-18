// Criando Instancias com constructor

// O constructor é o que acontece quando uma class é instanciada
// Antes de uma class ser chama ela sempre irá passar pelo constructor

class Pessoa {
    nome;
    idade;  
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const andre = new Pessoa ('Andre', 25);
const matheus = new Pessoa ('Matheus', 36);

console.log(andre);
console.log(matheus);

andre.descrever();
matheus.descrever();