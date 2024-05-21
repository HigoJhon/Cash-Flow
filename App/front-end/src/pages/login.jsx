import { useState } from "react";
import "../style/pages/login.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        setIsLogged(true);
      } else {
        setError('Por favor, insira email e senha.');
      }
    } catch (error) {
      console.error(error);
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  }

  if (isLogged) return <Navigate to="/home" />;

  return (
    <section className="user-login-area">
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          id="email-input"
          type="email"
          className="login_input"
          placeholder="Login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
        />
        <input
          id="password-input"
          type="password"
          className="login_input"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-required="true"
        />
        {error && <p className="error-message">{error}</p>}
        <a href="/newPassword">Recuperar senha</a>
        <button 
          className="login_button"
          type="submit"
        >
          Entrar
        </button>
        <p>
          Não tem uma conta? <a href="/newUser">Crie uma</a>
        </p>
      </form>
    </section>
  );
}

export default Login;