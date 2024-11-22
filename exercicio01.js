/* Para comentar um bloco 

1- Preço do combustivel;
2- Gasto médio de combustivel do carro por Km:
3- Distancia em Km de viagem;

*/

// meu jeito de resolver
const valorCombustivel = 5.79;
const kmPorLitros = 12;
const distancia_km = 1580;

const gasto_viagem = distancia_km / kmPorLitros * valorCombustivel;

console.log(gasto_viagem.toFixed(2)); // toFixed serve para definir quantas casas decimais vão ter após a virgula.


