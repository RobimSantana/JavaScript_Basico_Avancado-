/*4) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetue o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito - Receber 10% de desconto;
    - À vista no Dinheiro ou PIX - Receber 15% de desconto;
    - Em duas vezes - Preco normal de etiqueta sem juros;
    - Acima de duas vezes - Preço normal de etiqueta mais juros de 10%; */

const valorEtiqueta = 100;

// Códigos das condições de pagamento
const CONDICAO_DEBITO = 1;
const CONDICAO_DINHEIRO_PIX = 2;
const CONDICAO_DUAS_VEZES = 3;
const CONDICAO_MAIS_DE_DUAS_VEZES = 4;

let condicaoPagamento = 4; // altere aqui conforme necessário

if (condicaoPagamento === 1) {
    const descontoDebito = (valorEtiqueta -(valorEtiqueta * 0.10));
    
    console.log('O valor do produto é de R$',valorEtiqueta)
    console.log('A condição de pagamento escolhida foi Débito');
    console.log('Valor do desconto é:', descontoDebito,'%');
    console.log('Valor final do produto agora é:', precoFinalDebito);

} else if (condicaoPagamento === 2) {
    const descontoDinheiroPix = (valorEtiqueta -(valorEtiqueta * 0.15));
   
    console.log('O valor do produto é de R$',valorEtiqueta)
    console.log('A condição de pagamento escolhida foi Dinheiro ou Pix');
    console.log('Valor do desconto é:', descontoDinheiroPix,'%');
    console.log('Valor final do produto agora é:', precoFinalDinheiroPix);

} else if (condicaoPagamento === 3) {
    // Sem juros
    const semJurosTotal = valorEtiqueta;
    // Não há descontos nem aumentos em duas vezes
    console.log('O valor do produto é de R$',valorEtiqueta)
    console.log('A condição de pagamento escolhida foi Pagamento em 2 x R$',valorEtiqueta / 2);
    console.log('Valor total será:', semJurosTotal,'Sem juros');

} else if (condicaoPagamento === 4) {
    const jurosMaisDeDuassX = (valorEtiqueta * 0.10); // Juros sobre o preço normal
    const totalComJuros = valorEtiqueta + jurosMaisDeDuassX; // Total com juros
    console.log('O valor do produto é de R$',valorEtiqueta)
    console.log('A condição de pagamento escolhida foi Pagamento acima de 2x');
    console.log('Total dos juros será:', jurosMaisDeDuassX);
    console.log('Valor total com os juros será', totalComJuros);
} else {
    console.error("Condição inválida");
}






