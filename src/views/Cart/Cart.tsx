import styles from "./Cart.module.scss";
import { useProducts } from "../../hooks/useProducts";
import editButtonIcon from "../../assets/editButton.png";

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

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>

      <div className={styles.addressCard}>
        <h2>Shipping Address</h2>

        <p>Rua das Flores, 123, Bairro Jardim, São Paulo, SP</p>

        <button className={styles.editButton}>
          <img src={editButtonIcon} alt="" />
        </button>
      </div>

      <div className={styles.productsList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.productItem}>
            <img src={item.productImage} alt={item.productName} />

            <div className={styles.productInfo}>
              <p>{item.productName}</p>

              <strong>${item.price.toFixed(2)}</strong>
            </div>
            <div className={styles.controls}>
              <button onClick={() => decrement(item.id)}>-</button>

              <span>{item.quantity || 1}</span>

              <button onClick={() => increment(item.id)}>+</button>
            </div>

            <button
              className={styles.deleteBtn}
              onClick={() => remove(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className={styles.checkoutBar}>
        <strong>
          Total <span>${total.toFixed(2)}</span>
        </strong>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
}

export { Cart };
