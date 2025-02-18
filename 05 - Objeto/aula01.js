// Objetos são uma coleção dinamica de chaves e valores.

const santana = {    // nome do Objeto
    nome: 'Robson', //chave e valores
    idade: 25 // chave e valores
}

santana.altura = 1.72; // Incrementando chave e valores para o Objeto


console.log(santana.nome); // invocando o Objeto e estraindo particularidades unicas dentro do objeto
console.log(santana.idade);// invocando o Objeto e estraindo particularidades unicas dentro do objeto
console.log(santana)// invocando o Objeto 


delete santana.nome; // Retirando valores do Objeto.

console.log(santana)