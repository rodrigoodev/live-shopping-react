// context/ProductContext.js
"use client";

import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "iPhone 12 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 2000.0,
        old: 1600.0,
      },
    },
    {
      name: "iPhone 15 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 1000.0,
      },
    },
    {
      name: "iPhone 11 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 1000.0,
      },
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
