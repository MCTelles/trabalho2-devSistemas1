import styles from "./Home.module.scss";

import logoShopee from "../../assets/logoShopeeAMF.png";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.circuloLogo}>
        <img src={logoShopee} alt="" />
      </div>

      <h1>ShopeeAMF</h1>

      <span className={styles.greetingsSpan}>
        Beautiful eCommerce UI Kit for your online store
      </span>

      <button
        className={styles.createAccount}
        type="button"
        onClick={() => {
          navigate("/createAccount");
        }}
      >
        Let's get started
      </button>

      <button
        className={styles.loginHomeContainer}
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        <span className={styles.accountCreateSpan}>
          I already have an account
        </span>
      </button>
    </div>
  );
}

export { Home };
