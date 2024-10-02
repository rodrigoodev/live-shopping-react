"use client";
import style from "./style.module.css";
import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Button from "../Button";

export default function Details() {
  const { products } = useContext(ProductContext);

  return (
    <div className={style.details}>
      <div className={style.detailsText}>
        <div className={style.rowDetails}>
          <p>Produtos: ( {products.length} itens)</p>{" "}
          <p>
            {" "}
            {products.reduce((accumulator, product) => {
              return accumulator + product.price.value;
            }, 0)}
          </p>
        </div>
        <div className={style.rowDetails}>
          <p>Frete:</p> <p>R$ 0,00</p>
        </div>
        <div className={style.rowDetails}>
          <p>Desconto:</p> <p> R$ 30,00</p>
        </div>
        <div className={style.rowDetails}>
          <p>Subtotal:</p> <p>R$ 600,00</p>
        </div>
      </div>
      <Button variant="primary" className={style.teste} behavior="block">
        Seguir para o pagamento
      </Button>
    </div>
  );
}
