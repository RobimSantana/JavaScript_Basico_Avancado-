// Acessando Dinamicamente Valores de um Objeto.

const santana = {   
    nome: 'Robson', 
    idade: 25,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) 
}
};

console.log(santana['nome']); //  Assim podemos acessar os valores de um Objeto Dinamicamente, conforme uma String.