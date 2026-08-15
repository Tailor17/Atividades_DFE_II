import './style.css';

const Produtos_do_banco = [
  {
    id: 1,
    nome: 'Morango',
    preco: 25.00,
    metrica: 'kg',
    quantidade: 1,
    imagem:"./Bandeija_Morangos.jpg"
  },
  {
    id: 2,
    nome: 'Molho de Beterraba',
    preco: 3.50,
    metrica: 'molho',
    quantidade: 1,
    imagem:"./Beterraba_molho.jpeg"
  },
  {
    id: 3,
    nome: 'Repolho',
    preco: 5.00,
    metrica: 'unidade',
    quantidade: 1,
    imagem:"./Repolho.jpg"
  }
]

const itens_vitrine = document.getElementById('vitrine');

Produtos_do_banco.forEach((produto) => {
    itens_vitrine.innerHTML += `
    <div class="card-produto">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)} / ${produto.metrica}</p>
        <button class="btn-adicionar"  data-id="${produto.id}">Adicionar</button>
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

