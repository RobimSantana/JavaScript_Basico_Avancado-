// Faça um promagra para calcular o valor de uma viagem.

// Você terá 5 variaveis. Sendo elas: 
//    1- Preço do etanol:
//    2- Preço da gasolina;
//    3- O tipo de combustivel que está no seu carro;
//    4- Gasto médio de combustivel do carro por KM;
//    5- Distancia em KM da viagem;

//    Imprima no console o valor que sera gasto para realizar esta viagem.

const valorEtanol = 2.00;
const valorGasolina = 10.00;
const tipoCombustivel = 'Gasolina';

const kmPorLitros = 10;
const distancia_km = 1000;


if (tipoCombustivel === 'Etanol') {
    const gasto_viagem = (distancia_km / kmPorLitros) * valorEtanol;
    console.log('O combustivel utilizado foi Etanol, e o valor pago foi R$', gasto_viagem.toFixed(2))
} else if (tipoCombustivel === 'Gasolina') {
    const gasto_viagem = (distancia_km / kmPorLitros) * valorGasolina;
    console.log('O combustivel utilizado foi Gasolina, e o valor pago foi R$', gasto_viagem.toFixed(2))
} else {
    console.log('Tipo de Combustivel não informado !!!')
}
