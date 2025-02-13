//IMC usando fuction

function calcularIMC(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarIMC(imc){
    if (imc < 18.5) {
        return'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 25) {
        return'Peso Normal';
    }
    else if ( imc >= 25 && imc < 30){
        return'Acima do peso';
    }
    else if (imc >= 30 && imc < 40) {
        return'Obeso';
    }
    else {
        return'Obesidade Grave';
    }
}

(function main (){
    const peso = 72;
    const altura = 1.80;
    const imc = calcularIMC(peso, altura)
    console.log(classificarIMC(imc));
})(); // dessa forma não precisamos chamar o main, nessa forma ele já é invocado imediatamente sem ser chamada.
      // dessa forma podemos ate tirar o nome da funcion, ela será uma funcion não nomeada.
      // fazendo dessa forma não conseguimos chamar essa funcion em mais nenhum outro lugar.


//main(); // Para invocar uma function novamente é preciso retirar os () do final da fuction