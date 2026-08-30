import ProductTable from '../ProductTable/ProductTable.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function FilterableProductTable({ products }) {

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}