/*4) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetue o cálculo adequado.
Código Condição de pagamento:
- À vista Débito - Receber 10% de desconto;
- À vista no Dinheiro ou PIX - Receber 15% de desconto;
- Em duas vezes - Preco normal de etiqueta sem juros;
- Acima de duas vezes - Preço normal de etiqueta mais juros de 10%;

*/
function calculeDesconto (valor, desconto){
   return (valor - (valor * (desconto / 100))); 
} 
function calculeJuros (valor, juros){
    return (valor + (valor * (juros / 100) ));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log('A condição de pagamento escolhida foi Débito');
    console.log('O valor do produto é de R$', precoEtiqueta);
    console.log('Valor do desconto é de 10 %');
    console.log('Valor final do produto agora é R$ ' + calculeDesconto (precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log('A condição de pagamento escolhida foi Dinheiro ou Pix');
    console.log('O valor do produto é de R$', precoEtiqueta);
    console.log('Valor do desconto é de 15 %');
    console.log('Valor final do produto agora é R$ ' + calculeDesconto (precoEtiqueta, 15));
} else if ( formaPagamento === 3){
    console.log('A condição de pagamento escolhida foi em 2x');
    console.log('O valor do produto é de R$', precoEtiqueta);
    console.log('Valor a ser pago é será 2x', precoEtiqueta / 2);
    console.log('Valor final do produto será R$ ' + calculeDesconto (precoEtiqueta,0));
}else if ( formaPagamento === 4){
    console.log('A condição de pagamento escolhida foi acima de 2x');
    console.log('O valor do produto é de R$', precoEtiqueta);
    console.log('Valor do acrescimo é de 10%');
    console.log('Valor final do produto será R$ ' + calculeJuros(precoEtiqueta, 10));
} else{
    console.log('Condição de pagamento inexestenti')
}
