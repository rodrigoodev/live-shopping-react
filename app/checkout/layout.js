"use client";
import style from "./Style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductProvider } from "../context/ProductContext";
import Details from "../components/Details";

export default function Layout({ children }) {
  const currentPath = usePathname();

  return (
    <ProductProvider>
      <header className={style.header}>
        <nav className={style.navWrapper}>
          <div className={style.nav}>
            <Link
              className={`${style.navItem} ${
                currentPath == "/checkout/sacola" ? style.navItemActive : ""
              }`}
              href="/checkout/sacola"
            >
              Sacola
            </Link>
            <Link
              className={`${style.navItem} ${
                currentPath == "/checkout/pagamento" ? style.navItemActive : ""
              }`}
              href="/checkout/pagamento"
            >
              pagamento
            </Link>
            <Link
              className={`${style.navItem} ${
                currentPath == "/checkout/confirmacao"
                  ? style.navItemActive
                  : ""
              }`}
              href="/checkout/confirmacao"
            >
              confirmação
            </Link>
          </div>
        </nav>
      </header>
      <main className={style.main}>{children}</main>
      <Details></Details>
    </ProductProvider>
  );
}
