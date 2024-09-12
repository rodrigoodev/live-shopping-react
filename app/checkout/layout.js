import style from "./Style.module.css";

export default function Layout({ children }) {
  return (
    <>
      <main className={style.pokemon}>{children}</main>
    </>
  );
}
