import styles from "./Home.module.scss";

import logoShopee from "../../assets/logoShopeeAMF.png";
import arrowIcon from "../../assets/arrow.svg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.circuloLogo}>
        <img src={logoShopee} alt="" />
      </div>

      <h1>ShopeeAMF</h1>

      <span className={styles.greetingsSpan}>
        Beautiful eCommerce UI Kit for your online store
      </span>

      <button className={styles.createAccount}>Let's get started</button>

      <button className={styles.loginHomeContainer} type="button">
        <span className={styles.accountCreateSpan}>
          I already have an account
        </span>
        <div className={styles.loginButton}>
          <img src={arrowIcon} alt="Setinha" />
        </div>
      </button>
    </div>
  );
}

export { Home };
