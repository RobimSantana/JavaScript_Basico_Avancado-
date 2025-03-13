//  Atraves de uma lista vamos inserir a notas de um aluno e vamos calcular a media do mesmo
//Como verificar o tamanho de uma lista? nomeDaLista.length

const notas = []; // criando lista vazia dinaminca, pq não sabemos o tamanho dela.


//inserindo elementos a lista dinamicamente.
notas.push(5); 
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);


// Realizando a media das notas sem uma estrutura da repetição
// dessa forma vai rodar, mais não é o correto
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]; 

console.log(soma / 5); // Assim deveriamos saber  o tamanho da lista, e se o professor adicionar mais uma nota para o aluno?

// Veja aula 02....


