// Faça uma função para vê se você é maior de idade.
// e junte com a função do exercio 01


function escreverNome(nome){
   // console.log('Qual o seu nome? ' + nome);, Dessa forma o sistema não irá rodar, pq o console.log não seria o corrteto
   return 'Qual o seu nome? ' + nome // Dessa forma que é o correto, só utilize o console.log se for chamar a function logo a baixo.
}

escreverNome('Robson Santana');
escreverNome('Ana')

function maiorDeIdade (idade){   
    if (idade >= 18) {
        console.log(escreverNome('Robson Santana') + '. Você é maior de idade')
    }else{
       console.log(escreverNome('Robson Santana') + '. Você é menor de idade');
}
}

maiorDeIdade(17)