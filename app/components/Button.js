"use client";
import style from "./style.module.css";

export default function Button({ variant, children }) {
  const teste = () => {
    console.log("clicou");
  };

  const type =
    variant === "primary" ? style["button-primary"] : style["button-secondary"];

  return (
    <button onClick={teste} className={`${style.button} ${type}`}>
      {children}
    </button>
  );
}
