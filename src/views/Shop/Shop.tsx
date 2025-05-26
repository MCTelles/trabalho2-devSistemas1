import { Card } from "../../components/Card/Card";
import styles from "./Shop.module.scss";
import Select, { components } from "react-select";

function Shop() {
  const options = [
    { value: "socks", label: "Socks" },
    { value: "hats", label: "Hats" },
    { value: "dresses", label: "Dresses" },
  ];

  const customComponents = {
    DropdownIndicator: () => null,
    ClearIndicator: () => null,
  };

  return (
    <div className={styles.shopContainer}>
      <div className={styles.searchContainer}>
        <h1>Shop</h1>

        <Select
          components={customComponents}
          isMulti
          name="categories"
          options={options}
          className={styles.select}
          classNamePrefix={"select"}
        />
      </div>
      <Card />
    </div>
  );
}

export { Shop };
