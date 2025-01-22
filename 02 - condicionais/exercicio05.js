const valorEtiqueta = 5000;

// Códigos das condições de pagamento
const CONDICAO_DEBITO = 1;
const CONDICAO_DINHEIRO_PIX = 2;
const CONDICAO_DUAS_VEZES = 3;
const CONDICAO_MAIS_DE_DUAS_VEZES = 4;

let condicaoPagamento = CONDICAO_DEBITO; // altere aqui conforme necessário

if (condicaoPagamento === CONDICAO_DEBITO) {
    const descontoDebito = (valorEtiqueta * 0.10);
    const precoFinalDebito = valorEtiqueta - descontoDebito;
    console.log('A condição de pagamento escolhida foi Débito');
    console.log('Valor do desconto é:', descontoDebito);
    console.log('Valor final do produto agora é:', precoFinalDebito);

} else if (condicaoPagamento === CONDICAO_DINHEIRO_PIX) {
    const descontoDinheiroPix = (valorEtiqueta * 0.15);
    const precoFinalDinheiroPix = valorEtiqueta - descontoDinheiroPix;
    console.log('A condição de pagamento escolhida foi Dinheiro ou Pix');
    console.log('Valor do desconto é:', descontoDinheiroPix);
    console.log('Valor final do produto agora é:', precoFinalDinheiroPix);

} else if (condicaoPagamento === CONDICAO_DUAS_VEZES) {
    // Sem juros
    const semJurosTotal = valorEtiqueta;
    // Não há descontos nem aumentos em duas vezes
    console.log('A condição de pagamento escolhida foi Pagamento em 2x');
    console.log('Valor total será:', semJurosTotal);

} else if (condicaoPagamento === CONDICAO_MAIS_DE_DUAS_VEZES) {
    const jurosMaisDeDuassX = (valorEtiqueta * 0.10); // Juros sobre o preço normal
    const totalComJuros = valorEtiqueta + jurosMaisDeDuassX; // Total com juros
    console.log('A condição de pagamento escolhida foi Pagamento acima de 2x');
    console.log('Total dos juros será:', jurosMaisDeDuassX);
    console.log('Valor total com os juros será', totalComJuros);
} else {
    console.error("Condição inválida");
}

