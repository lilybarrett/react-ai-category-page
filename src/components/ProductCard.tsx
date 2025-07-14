import type { Product } from "../types/product";
import * as productStyles from "../styles/products.css";

export const ProductCard = (product: Product) => {
  const { name, price, imageUrl } = product;
  return (
    // The article element is used here for each product card to ensure semantic HTML
    // and to allow screen readers to interpret each product as a separate entity
    <article className="product">
      <img src={imageUrl} alt={`Photo of ${name}`} className={productStyles.productImage} />
      <h2 className={productStyles.productName}>{name}</h2>
      <p className={productStyles.productPrice}>${price.toFixed(2)}</p>
    </article>
  );
};
