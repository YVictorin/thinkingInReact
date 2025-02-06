import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
        //if the product's name is inside of the filter text it will be not shown
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
       }
       //if the user only wants stocked items but the product is not in stock it won't be rendered
      if (inStockOnly && !product.stocked) {
        return;
      }
      //adds all the new products category components into an array that will be displayed in the JSX code below
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }