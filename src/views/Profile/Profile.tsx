import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import styles from "./Profile.module.scss";

import product1 from "../../../public/images/product1.jpg";
import product2 from "../../../public/images/product2.jpg";
import product3 from "../../../public/images/product3.jpg";
import product4 from "../../../public/images/product4.jpg";
import product5 from "../../../public/images/product5.jpg";
import product6 from "../../../public/images/product6.jpg";
import product7 from "../../../public/images/product7.jpg";

import avatarProfile from "../../assets/avatarProfile.svg";

function Profile() {
  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
  ];

  return (
    <div className={styles.profileContainer}>
      <div className={styles.greetingsContainer}>
        <h2>Hello, Romina!</h2>

        <img src={avatarProfile} alt="Foto do perfil" />
      </div>

      <div className={styles.ordersContainer}>
        <h2>My Orders</h2>

        <div className={styles.statusButtonsOrder}>
          <button>To pay</button>

          <button className={styles.hasBadge}>To receive</button>

          <button>To review</button>
        </div>
      </div>

      <div className={styles.shopContainer}>
        <h2>Shop</h2>

        <ImageCarousel images={images} />
      </div>
    </div>
  );
}

export { Profile };
