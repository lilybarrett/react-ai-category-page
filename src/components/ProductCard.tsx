import type { Product } from "../types/product";
import * as productStyles from "../styles/products.css";

export const ProductCard = (product: Product) => {
  const { name, price, imageUrl } = product;
  return (
    <article
      tabIndex={0}
      aria-labelledby={`product-title-${product.id}`}
      aria-describedby={`product-price-${product.id}`}
    >
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className={productStyles.productImage}
      />
      <h2
        id={`product-title-${product.id}`}
        className={productStyles.productName}
      >
        {name}
      </h2>
      <p
        id={`product-price-${product.id}`}
        className={productStyles.productPrice}
      >
        ${price.toFixed(2)}
      </p>
    </article>
  );
};
