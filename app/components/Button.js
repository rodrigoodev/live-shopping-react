"use client";
import style from "./style.module.css";

export default function Button({ variant, children, behavior, className }) {
  const teste = () => {
    console.log("clicou");
  };

  const type =
    variant === "primary" ? style["button-primary"] : style["button-secondary"];

  const getBehavior = behavior === "block" ? style["button-block"] : "";

  return (
    <button
      onClick={teste}
      className={`${style.button} ${type} ${getBehavior} ${className}`}
    >
      {children}
    </button>
  );
}
