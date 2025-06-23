import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate();

  // estados para armazenar o input do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        // ajustar URL do backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.message || "Erro no login");
        return;
      }

      // salvar token no localStorage (ou cookies, dependendo do seu fluxo)
      localStorage.setItem("token", data.token);

      // navega para a página de perfil
      navigate("/shop");
    } catch (error) {
      setErrorMsg("Sua senha ou email estão incorretos.");
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>

      <span>Good to see you back! ❤</span>
      <input
        type="email"
        name="email"
        autoComplete="on"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      <button className={styles.loginButton} onClick={handleLogin}>
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
