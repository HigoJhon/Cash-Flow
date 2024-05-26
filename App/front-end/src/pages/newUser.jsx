import { useState } from "react";
import person from "../images/Open Peeps.png";
import "../style/pages/newUser.css";
import { postRequest } from "../Service/Request";
import { Navigate } from "react-router-dom";
import FormePerfil from "../components/formPerfil";
import FormePassword from "../components/formePessword";

function NewUser() {
    const [userForme, setUserForme] = useState({ name: '', telephone: '', email: '' });
    const [password, setPassword] = useState({ password: '', confirmPassword: '' });
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState('');

    const newUser = async (e) => {
        e.preventDefault();

        if (password.password !== password.confirmPassword) {
            setError('As senhas não conferem.');
            return;
        }

        try {
            await postRequest('/User/add', { 
                name: userForme.name, 
                telephone: userForme.telephone, 
                email: userForme.email, 
                password: password.password 
            });
            setIsLogged(true);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    if (isLogged) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container-newUser">
            <div className="div-img">
                <img src={person} alt="icon" />
            </div>
            <section>
                <form className="form-newUser" onSubmit={newUser}>
                    <h1>Criar conta</h1>
                    <div className="div-input-newUser">
                        <FormePerfil 
                            userForme={userForme}
                            setUserForme={setUserForme}
                        />
                        <FormePassword 
                            password={password}
                            setPassword={setPassword}
                        />
                    </div>
                    <button className="create_button" type="submit">
                        Cadastrar
                    </button>
                    <br />
                    <p>
                        Já tem uma conta? <a href="/">Faça login</a>
                    </p>
                    <br />
                    {error && <p className="error-message">{error}</p>}
                </form>
            </section>
        </div>
    );
}

export default NewUser;
