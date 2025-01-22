// E se precisarmos informar se o numero que o usuario inserio foi invalido?
// Podemos usar o else is ( se não se)

const numero1 =  4;
const NumeroPar = numero1 % 2 === 0;


if (numero1 === 0){
    console.log('O número é invalido')
} else if (NumeroPar) {
    console.log('Par')
} else {             
    console.log('Impar')
}