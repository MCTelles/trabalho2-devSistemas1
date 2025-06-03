import { useProducts } from "../../hooks/useProducts";
import { useNavigate } from "react-router";

import editButtonIcon from "../../assets/editButton.png";
import moreButton from "../../assets/moreButton.svg";
import lessButton from "../../assets/lessButton.svg";
import deleteButton from "../../assets/deleteButton.svg";

import styles from "./Cart.module.scss";

function Cart() {
  const { cart, setCart } = useProducts();

  const increment = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decrement = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
    );
  };

  const remove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const navigate = useNavigate();

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartLabel}>Cart</h2>

      <div className={styles.addressCard}>
        <h2 className={styles.shippingLabel}>Shipping Address</h2>

        <div className={styles.addressInfo}>
          <p>Rua das Flores, 123, Bairro Jardim, São Paulo, SP</p>

          <button className={styles.editButton}>
            <img src={editButtonIcon} alt="" />
          </button>
        </div>
      </div>

      <div className={styles.productsList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.productItem}>
            <img
              className={styles.productImage}
              src={item.productImage}
              alt={item.productName}
            />

            <div className={styles.productInfo}>
              <p>{item.productName}</p>

              <h2>${item.price.toFixed(2)}</h2>
            </div>
            <div className={styles.controls}>
              <button onClick={() => decrement(item.id)}>
                <img src={lessButton} />
              </button>

              <span>{item.quantity || 1}</span>

              <button onClick={() => increment(item.id)}>
                <img src={moreButton} />
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => remove(item.id)}
              >
                <img src={deleteButton} alt="remover" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.checkoutBar}>
        <h2 className={styles.totalLabel}>
          Total <span>${total.toFixed(2)}</span>
        </h2>
        <button
          className={styles.checkoutButton}
          onClick={() => {
            navigate("/payment");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export { Cart };
