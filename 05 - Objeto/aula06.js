// Funçoes recebendo Objetos

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

function compararPessoass (p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velhor que ${p1.nome}`)
    }
}

const vitor = new Pessoa('Vitor', 25);
const rennan = new Pessoa('Rennan', 30);

compararPessoass(vitor,rennan)