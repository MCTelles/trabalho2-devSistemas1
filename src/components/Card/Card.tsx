import styles from "./Card.module.scss";

interface ITypeProducts {
  productName: string;
  productPrice: number;
  productType: string;
  productImage: string;
}

function Card({
  productName,
  productPrice,
  productType,
  productImage,
}: ITypeProducts) {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={productImage} alt="" />

        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{productName}</h2>
        </div>
      </div>
    </>
  );
}

export { Card };
