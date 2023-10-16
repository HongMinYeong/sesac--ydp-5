import React from 'react';
import { productInfos } from './ProductList';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  console.log(product);
  //   console.log(productInfos);
  return (
    <>
      <Link className="productItem" to={`/products/${product.id}`}>
        <ul className="product">
          <li>상품명: {product.name}</li>
          <li>상세설명: {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}
