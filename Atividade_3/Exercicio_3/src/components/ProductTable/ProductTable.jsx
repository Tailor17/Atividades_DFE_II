import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.jsx';
import ProductRow from '../ProductRow/ProductRow.jsx';
import './ProductTable.css';

export default function ProductTable({ products }) {
  const produtosAgrupados = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        
        {Object.entries(produtosAgrupados).map(([categoria, listaDeProdutos]) => (
          <>
            
           
            <ProductCategoryRow category={categoria} />
            
            
            {listaDeProdutos.map((product) => (
              <ProductRow product={product} key={product.name} />
            ))}
            
          </>
        ))}
      </tbody>
    </table>
  );
}