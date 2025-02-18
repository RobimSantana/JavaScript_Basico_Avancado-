// Criando metodos para o Objeto

const santana = {   
    nome: 'Robson', 
    idade: 25,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) //OBS: para utilizar ${} usasse craze``,  quando colocamos uma function dentro de um objeto isso se chama METODO. Quando precisamos chamar o nome da Function dentro do Objeto utilizamos this ao em vez do nome do objeto.
    }
};

santana.nome = 'Thiago'; // passando novos valores para o Objeto
santana.idade = 15

santana.descrever();// invocando a function dentro do Objeto.
