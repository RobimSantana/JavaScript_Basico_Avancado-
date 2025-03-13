
// criando lista vazia;

const notas = [];
notas.push(5); // adicionando intes a lista
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);


let soma = 0; // variavel para receber a soma iniciando em zero


// estrutura de repetição For:

for (let i = 0; i < notas.length; i++) { // Enquanto o I não percorrer toda a lista some mais um pulo para o I (i++)
    const nota = notas [i]; // vareavel para receber cada intem da lista

    soma = soma + nota; // vareavel para somar e armazenar cada item da lista.
    
}

const media = soma / notas.length; // fora do loop, criando uma vareavel para realizar a media, que é a soma das notas dividido pela quantidade de intens na lista

console.log(media); //Imprimindo a media 