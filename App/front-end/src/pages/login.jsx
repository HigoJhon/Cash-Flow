import { useState } from "react";
import "../style/pages/login.css"
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        setIsLogged(true);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  if (isLogged) return <Navigate to="/home" />;

  return (
    <>
      <section className="user-login-area">
        <form>
          <h1>Login</h1>
          <label htmlFor="email-input">
            <input
              type="email"
              className="login_input"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              className="login_input"
              placeholder="Senha"
              visible="false"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <a href="/">Recuperar senha</a>
          <button 
            className="login_button"
            type="submit"
            onClick={(e) => login(e)}
          >
            Entrar
          </button>
          <br />
          <p>
            Não tem uma conta? <a href="/newUser">Crie uma</a>
          </p>
        </form>
      </section>
      {/* <h1>
        Imagem de <a href="https://br.freepik.com/psd-gratuitas/ed-ilustracao-de-criptomoeda-com-monitor-e-grafico_29014159.htm">Freepik</a>
      </h1> */}
    </>
  );
}

export default Login;