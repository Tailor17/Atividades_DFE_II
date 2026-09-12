export function renderizarVitrine(listaDeProdutos, idDoContainer) {
    
    const container = document.getElementById(idDoContainer);
    container.innerHTML = "";

    listaDeProdutos.forEach((produto) => {
        container.innerHTML += `
        <div class="card-produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>Preço: R$ ${produto.preco.toFixed(2)} / ${produto.metrica}</p>
            <button class="btn-adicionar" data-id="${produto.id}">Adicionar</button>
        </div>
        `;
    });
}

//utilizar MAP ao invez de forEach para acostumar