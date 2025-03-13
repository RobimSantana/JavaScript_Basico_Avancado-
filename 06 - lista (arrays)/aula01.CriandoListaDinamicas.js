// As listas são representadas por [ ] colchetes:
// Podemos ter lista de numeros de ojetos , strings etc...
// Podemos tambem ter tipos diferentes em uma lista, por Ex: podemos ter strings e numeros juntos 

// Exemplos 01:
// Lista já com elementos definidos: adicionando elementos na lista, chamando elesmentos individuamente dentro da lista e substituindo elementos da lista.


const alunos = ['Jaoa', 'Pedro', 'Antonio']; // lista de alunos 


console.log(alunos);  // Imprimindo toda a lista

console.log(alunos[0]); // imprimindo o primeiro elemento da lista



alunos.push('Rennan'); // Adicionando alementos na lista dinamicamente

console.log(alunos); // imprimindo toda lista + novo elemento.


alunos[4] = 'Vinicios'; // Adicionando alementos na lista diretamento, para usar dessa forma temos que saber exatamente a posição que queremos pois se já houver outro elemento nessa lista na posição desejada, o novo elemento é colocado na lista e substituindo o elemento anterior

console.log(alunos); // imprimindo toda lista + novo elemento.



// Exemplos 02:
// Lista podem vim vazias: Podemos criar uma lista vazia e ir adicionando elementos a ela
// Adicionando e removendo itens

const escola = []; // Criando lista vazia

escola.push('Cadeiras'); // Adicionando elemento(string) para a lista de forma dinamica 

escola.push(10); // Adicionando elementos (numeros - int) para a lista

escola.push(0.114)

console.log(escola); // imprimindo lista


escola.pop(); // O pop vazio retira o intem proximo do final

escola.shift(); // O shift retira o primeiro elemento da lista
console.log(escola.shift());

console.log(escola.pop()); // imprimindo qual foi o elemento retirado da lista

console.log(escola); // imprimendo a lista sem o elemento que o retirou










