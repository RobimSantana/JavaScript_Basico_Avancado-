// Estrutura de repetição For (para)
// o For ele é divido em tres partes, VAMOS ENTENDER.

// A primeira parte é nossa vareavel de controle,nesse caso o let index = 0; ele normalmente começa com 0 por que de onde vamos partir, se desejar começar no 100 para que o for possa chegar a 200 pode começar de qualquer numero.

// A segunda partte  é a nossa condição que diz, se index for (<) maior que 10 então, passe para dentro do lanço de repetição.


// A terceira parte é a parte que incrementa mais uma unidade ao nosso vareavel de controle, nesse caso somando +1 para ela.
for (let index = 0; index < 10; index++) {
    console.log(index);
    
}


// Exmeplo 02: Percorrendo strings com FOR

// Dessa forma o I vai ser impresso mostrando cada letra ate chegar o tamanho da lista(length)

const nome = 'Robson Santana de Oliveira';

for (let i = 0; i < nome.length; i++){ 
    console.log(nome[i]);
}