import { useNavigate, useParams } from "react-router-dom";
import styles from "./BuyProduct.module.scss";
import { useProducts } from "../../hooks/useProducts";

function BuyProduct() {
  const { id } = useParams();
  const { products, cart, setCart } = useProducts();
  const product = products.find((product) => product.id === Number(id));
  const navigate = useNavigate();

  const addToCart = () => {
    if (product) {
      setCart((prev) => [...prev, product]);
      navigate("/cart");
    }
  };

  return (
    <div className={styles.buyProductContainer}>
      <img src={product?.productImage} alt="" />
      <div className={styles.buyContainer}>
        <div className={styles.productDescription}>
          <span>{product?.productName}</span>
          <h2>${product?.price}</h2>
        </div>
        <button onClick={addToCart}>Buy</button>
      </div>
    </div>
  );
}

export { BuyProduct };
