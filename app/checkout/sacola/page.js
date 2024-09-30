import style from "./Style.module.css";

export default function Page() {
  const products = [
    {
      name: "iPhone 12 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 1590.0,
        old: 1600.0,
      },
    },
    {
      name: "iPhone 15 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 1590.0,
      },
    },
    {
      name: "iPhone 11 Mini",
      image:
        "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/239100238/tit-nio-natural--1--n14c8ix73w.jpg",
      price: {
        value: 1590.0,
      },
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.list}>
          {products.map((product) => {
            return (
              <>
                <div className={style.item}>
                  <div className={style.imageWrapper}>
                    <img
                      className={style.image}
                      src={product.image}
                      alt="iPhone 12 Mini"
                    />
                  </div>
                  <div className={style.nameProduct}>{product.name}</div>
                  <div className={style.price}>
                    <div className={style.oldPriceValue}>
                      {product.price.old}
                    </div>
                    <div className={style.priceValue}>
                      {product.price.value}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
