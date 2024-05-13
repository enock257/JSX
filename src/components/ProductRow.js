export function ProductRow({ product }) {
  const style = product.stoked ? undefined : { color: "red" };
  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
