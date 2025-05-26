import styles from "./Card.module.scss";

function Card() {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src="" alt="" />

        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Card Title</h2>
        </div>
      </div>
    </>
  );
}

export { Card };
