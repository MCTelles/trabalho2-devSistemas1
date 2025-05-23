import { useNavigate } from "react-router";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>

      <span>Good to see you back! ❤</span>

      <input type="email" placeholder="Email" />

      <button
        className={styles.loginButton}
        onClick={() => {
          navigate("/profile");
        }}
      >
        Login
      </button>

      <button
        className={styles.loginCancelButton}
        onClick={() => {
          navigate("/");
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export { Login };
