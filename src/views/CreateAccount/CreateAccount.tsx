import { useState } from "react";
import { useNavigate } from "react-router-dom";

import uploadPhoto from "../../assets/uploadPhoto.png";

import { useFakeLoading } from "../../hooks/useFakingLoading";
import { Loader } from "../../components/Loader/Loader";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

import styles from "./CreateAccount.module.scss";

function CreateAccount() {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("BR");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const loading = useFakeLoading(2500);

  const flagUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;

  if (loading) return <Loader />;

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <div className={styles.createAccountContainer}>
        <h1>Create Account</h1>

        <button>
          <img src={uploadPhoto} alt="Upload Photo" />
        </button>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.inputEmail}
          />

          <div className={styles.passwordContainer}>
            <input
              type={type}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputPassword}
            />
            <span onClick={handleToggle} className={styles.eyeInput}>
              {type === "password" ? <EyeIcon /> : <EyeSlashIcon />}
            </span>
          </div>

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
