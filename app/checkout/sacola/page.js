"use client";

import style from "./Style.module.css";
import ProductContext from "../../context/ProductContext"; // Verifique se o caminho está correto
import React, { useContext } from "react";

export default function Page() {
  const { products } = useContext(ProductContext); // Isso deve funcionar corretamente

  return (
    <div className={style.container}>
      <div className={style.list}>
        {products.map((product, index) => (
          <div key={index} className={style.item}>
            <div className={style.imageWrapper}>
              <img
                className={style.image}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className={style.nameProduct}>{product.name}</div>
            <div className={style.price}>
              {product.price.old && (
                <div className={style.oldPriceValue}>{product.price.old}</div>
              )}
              <div className={style.priceValue}>{product.price.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
