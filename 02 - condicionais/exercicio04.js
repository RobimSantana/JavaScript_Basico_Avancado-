/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetue o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito - Receber 10% de desconto;
    - À vista no Dinheiro ou PIX - Receber 15% de desconto;
    - Em duas vezes - Preco normal de etiqueta sem juros;
    - Acima de duas vezes - Preço normal de etiqueta mais juros de 10%;
*/


const valorEtiqueta = 5000;


const debito = 10;
const calc_debito = (valorEtiqueta * debito) / 100;
const descontoDebito = valorEtiqueta - calc_debito
 
const dinheiro_pix = 15;
const calc_dinheiro_pix = (valorEtiqueta * dinheiro_pix) / 100;
const desconto_dinheiro_pix = valorEtiqueta - calc_dinheiro_pix


const Pagamento_duas_x = 2;
const calc_sem_juros = valorEtiqueta / Pagamento_duas_x;
const sem_juros = valorEtiqueta


const Pagamento_mais_duas_x = 10;
const calc_juros_mais_duas_x = valorEtiqueta + (Pagamento_mais_duas_x / 100);
const juros_mais_duas_x = valorEtiqueta + calc_juros_mais_duas_x

let condicaoPagamento = Pagamento_mais_duas_x;


if (condicaoPagamento === debito) {
    console.log('A condição de pagamento escolhido foi debito')
    console.log('O valor do desconto é de', calc_sem_juros)
    console.log('O valor do produto agora é de ',descontoDebito, )
} 
else if (condicaoPagamento === dinheiro_pix) {
    console.log('A condição de pagamento escolhido foi Dinheiroo ou Pix')
    console.log ('O valor do desconto é de', calc_dinheiro_pix);
    console.log('O valor do produto agora é de ',desconto_dinheiro_pix)
}
 else if (condicaoPagamento === Pagamento_duas_x) {
    console.log('A condição de pagamento escolhido foi Pagamento 2x',calc_sem_juros)
    console.log('O valor do produto ficará no valor de',sem_juros)
} 
else if (condicaoPagamento === Pagamento_mais_duas_x){
    console.log('A condição de pagamento escolhido foi Pagamento mais 2x')
    console.log('O valor do juros é de ', calc_juros_mais_duas_x)
    console.log('O valor do produto agora é de ', juros_mais_duas_x)
}else{
    console.log('Valor invalido')
}





