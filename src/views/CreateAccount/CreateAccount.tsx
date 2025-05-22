import uploadPhoto from "../../assets/uploadPhoto.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreateAccount.module.scss";
import { useFakeLoading } from "../../hooks/useFakingLoading";
import { Loader } from "../../components/Loader/Loader";

function CreateAccount() {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("BR");

  const flagUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;

  const loading = useFakeLoading(2500);

  if (loading) return <Loader />;

  return (
    <>
      <div className={styles.createAccountContainer}>
        <h1>Create Account</h1>

        <button>
          <img src={uploadPhoto} alt="Upload Photo" />
        </button>

        <form className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />

          <div className={styles.phoneInput}>
            <img
              className={styles.flag}
              src={flagUrl}
              alt={`${countryCode} flag`}
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
              className={styles.phonefield}
            />
          </div>
        </form>

        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.buttonFormat} ${styles.doneButton}`}
            type="button"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Done
          </button>

          <button
            className={`${styles.buttonFormat} ${styles.cancelButton}`}
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export { CreateAccount };
