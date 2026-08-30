import './ProductCategoryRow.css';

export default function ProductCategoryRow({ category }) {
  return (
    <tr className="category-row">
      <th colSpan="2">{category}</th>
    </tr>
  );
}