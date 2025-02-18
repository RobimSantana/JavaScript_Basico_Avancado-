// Como criar classes e instancias

// CLASS - Dentro de uma class colocamos apenas as chaves que definem um objeto, sem seus valores
// Assim a class pode ser instanciada usando somente as chaves para receber novos valores.

// INSTACIA - É a ocorrencia de um objeto( Assim que ele recebe valores para as suas chaves)


//Objeto :

class Pessoa {   // A função de uma classe é definir como serão as chaves e o valores de um objeto, para que elas
    //possam ser instaciadas
    nome;
    idade;
    
    descrever(){  // dentro uma classe não se usa a Function, apenas o nome dela.
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`) 
    }

}

// Instancia

const Andre = new Pessoa();
Andre.nome ='Andre Luiz';
Andre.idade = 26

const matheus = new Pessoa();
matheus.nome = 'Matheus Nublado';
matheus.idade = 36

console.log(Andre);
console.log(matheus);

Andre.descrever();
matheus.descrever();
