/* 
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso / (altura *altura));
    Instancie uma pessoa chamanda José que tenha 70kg de peso e 1,75 de altura e peça ao Jose para dizer o valor do seu IMC.
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){ // Quando não passamos o valor para o medoto é pq estamos pegando os valores internos da class
        const IMC = this.peso / (this.altura * this.altura);
        console.log(`Meu nome é ${this.nome}, e meu IMC é de ${IMC}`) // this.nome significa que estamos pegando o valo interno da classe( do objeto)
    };

    //Criando uma Função dentro do Objeto: ( quando se cria uma função não é preciso colocar o nome Function, apenas o nome da Function)
    classificarImc () {
        const imc = this.calcularIMC();

        if (imc < 18.5){
            return(`O nivel do IMC do(a) ${this.nome} é ABAIXO DO PESO `);
        } else if ( imc >= 18.5 && imc < 25){
            return(`O nivel do IMC do(a) ${this.nome} é NORMAL `);
        }else if (imc  >= 25 && imc < 30){
            return(`O nivel do IMC do(a) ${this.nome} é ACIMA DO PESO `);
        }else if (imc  >= 30 && imc < 40){
            return(`O nivel do IMC do(a) ${this.nome} é OBSO`);
        }else {
            return(`O nivel do IMC do(a) ${this.nome} é Grave acima do peso!!! `)
        }
        
    }
}





const jose = new Pessoa('José', 55, 1.75);

console.log(jose.classificarImc())

