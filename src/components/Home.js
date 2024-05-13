import { Checkbox } from "./Checkbox";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "vegetables", price: "$4", stocked: true, name: "Spinach" },
  { category: "vgetables", price: "$3", stocked: true, name: "punpkin" },
  { category: "vgetables", price: "$1", stocked: true, name: "pess" },
];

function Home() {
  return (
    <div className="container my-3">
      <SearchBar />
      <ProductTable Products={PRODUCTS} />
    </div>
  );
}
function SearchBar() {
  return (
    <div>
      <div className="nb-3">
        <input value="" onChange={() => null} placeholder="Rechercher...." />

        <Checkbox
          id="stocked"
          checked={false}
          onchange={() => null}
          label="N'affiche que les produits en stock"
        />
      </div>
    </div>
  );
}
function ProductTable({ products }) {
  const rows = [];
  // let lastCategory = null;
  // for (let product of products) {
  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow key={product.category} name={product.category} />
  //     );
  //   }
  //   lastCategory = product.category;
  //   rows.push(<ProductRow product= {product} key={product.name} />);
  // }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default Home;
