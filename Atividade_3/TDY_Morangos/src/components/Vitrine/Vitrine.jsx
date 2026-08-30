import './Vitrine.css';
import produtos_do_banco from '../../data/produtos.json'; 

export function Vitrine() {
  return (
    <main className="vitrine-grid" id="vitrine">
      
      {produtos_do_banco.map((produto) => (
        
        <div className="card-produto" key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          
          <h2>{produto.nome}</h2>
          
          <p>Preço: R$ {produto.preco.toFixed(2)} / {produto.metrica}</p>
          
          <button className="btn-adicionar" data-id={produto.id}>Adicionar</button>
        </div>

      ))}

    </main>
  );
}