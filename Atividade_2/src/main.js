import './style.css';
import Produtos_do_banco from './modules/produtos.js';

Produtos_do_banco.forEach((produto) => {
    itens_vitrine.innerHTML += `
    <div class="card-produto">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)} / ${produto.metrica}</p>
        <button class="btn-adicionar" data-id="${produto.id}">Adicionar</button>
    </div>
    `;
});

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
});

