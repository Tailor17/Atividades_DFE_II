export function iniciarCarrinho() {
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');

let totalItensCarrinho = 0;

const contadorCarrinhoHtml = document.getElementById('contador-carrinho');

botoesAdicionar.forEach((botao) => {

    botao.addEventListener('click', () => {

      const idClicado = botao.dataset.id;

      console.log("O botão clicado foi do ID: ", idClicado);

      totalItensCarrinho++;
      
      contadorCarrinhoHtml.textContent = totalItensCarrinho;


    });
});}