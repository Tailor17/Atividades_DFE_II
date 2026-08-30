import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.jsx';
import { PRODUCTS } from './Dados/Produtos.jsx';

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
