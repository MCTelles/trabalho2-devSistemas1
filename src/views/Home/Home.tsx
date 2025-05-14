import styles from "./Home.module.scss";

import logoShopee from "../../assets/logoShopeeAMF.png";
import arrowIcon from "../../assets/Arrow.svg";

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

      <div className={styles.loginHomeContainer}>
        <span className={styles.accountCreateSpan}>
          I already have an account
        </span>

        <button className={styles.loginButton}>
          <img className={styles.arrow} src={arrowIcon} alt="Setinha" />
        </button>
      </div>
    </div>
  );
}

export { Home };
