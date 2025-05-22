import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>

      <span>Good to see you back!</span>

      <input type="email" placeholder="Email" />

      <button className={styles.loginDoneButton}>Login</button>

      <button className={styles.loginCancelButton}>Cancel</button>
    </div>
  );
}

export { Login };
