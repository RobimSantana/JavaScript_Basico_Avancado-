/* 
 1 - Crie uma classe para representar carros.
 Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilomentro rodado.
 Crie um método que dado a quantidade de quilometro e o preço do combustvel, nos retorne o valor gasto em reais para este percurso.
*/

class Carro { // Criando a classe carro
    marca;  // Atributos do carro
    cor ;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm){ // Criando um cosntrutor para firmar que todos os atributos sejam obrigatorios 
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastoDeViagem(distanciaKm, precoCombustivel){ // Criando o metodo recebendo valores de fora para calcular o preço gasto na viagem.
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }


}


//instanciando o Objeto carro:

const golf = new Carro('Fiat', 'verde', 1/12); // O 1/12 significa que o carro criado gasta 1 lt por 12km .
console.log(golf.calcularGastoDeViagem(70, 5));// Invocando o Metodo, o valo 70 é a distaciaKm e o 5 é o precoCombustivel do metodo.


const palio = new Carro('Fiat', 'Preto', 1/10);
console.log (palio.calcularGastoDeViagem(70, 5)); // passando o valor de fora para o metodo interno da classe