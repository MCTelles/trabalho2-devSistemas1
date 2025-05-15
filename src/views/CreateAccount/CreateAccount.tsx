import styles from "./CreateAccount.module.scss";

import uploadPhoto from "../../assets/uploadPhoto.png";
import { useState } from "react";

function CreateAccount() {
  const [countryCode, setCountryCode] = useState("BR");

  const flagUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;

  return (
    <>
      <div className={styles.createAccountContainer}>
        <h1>Create Account</h1>

        <img src={uploadPhoto} alt="Upload Photo" />

        <form className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />

          <div className={styles.phoneInput}>
            <img
              src={flagUrl}
              alt={`${countryCode} flag`}
              className={styles.flag}
            />

            <select
              className={styles.countryCode}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="BR">+55</option>
              <option value="US">+1</option>
              <option value="FR">+33</option>
            </select>

            <div className={styles.separator}></div>
            <input
              type="tel"
              placeholder="Your number"
              className={styles.phoneField}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export { CreateAccount };
