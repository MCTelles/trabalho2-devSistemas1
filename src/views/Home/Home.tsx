import styles from "./Home.module.scss";

import logoShopee from "../../assets/logoShopeeAMF.png";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.circulo}>
        <img src={logoShopee} alt="" />
      </div>
      <h1>ShopeeAMF</h1>
      <span>Beautiful eCommerce UI Kit for your online store</span>
    </div>
  );
}

export { Home };
