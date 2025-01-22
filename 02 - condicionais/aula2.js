// Para imprimir uma frase após o resultado podemos utilizar o IF e o ELSE
// if (SE) é a estrutura mais basica,
// else (SE NÃO)


const numero =  0;
const eNumeroPar = numero % 2 === 0;

if (eNumeroPar) {
    console.log('Par')
}

if (!eNumeroPar) {    // Usasse o sinal de ! na frente da condição para ela ter um valor ao contrario      
    console.log('Impar')
}


const numero1 =  0;
const NumeroPar = numero1 % 2 === 0;

if (NumeroPar) {
    console.log('Par')
} else {             // Usando o else que é a forma mais comum, ao inves do !.
    console.log('Impar')
}