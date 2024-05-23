import { useState } from "react";
import person from "../images/Open Peeps.png";
import "../style/pages/newUser.css";
import { postRequest } from "../Service/Request";
import { Navigate } from "react-router-dom";

function NewUser() {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState('');

    const newUser = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('As senhas não conferem.');
            return;
        }

        try {
            const response = await postRequest('/User/add', { name, telephone, email, password });
            console.log(response.status);
            setIsLogged(true);
        } catch (error) {
            const errorStatus = error.response.data.errors;
            console.error('Erro ao tentar criar usuário:', error.response.data.errors.Email);
            setError(errorStatus.Email ? errorStatus.Email : errorStatus.Password );
        }
    }

    if (isLogged) {
        return <Navigate to="/home" />;
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
                        <label htmlFor="name-input">
                            Nome
                            <input
                                type="text"
                                className="create_input"
                                placeholder="Joao da Silva"
                                value={name}
                                onChange={ (e) => setName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="phone-input">
                            Numero
                            <input
                                type="number"
                                className="create_input"
                                placeholder="21 99999-9999"
                                value={telephone}
                                onChange={ (e) => setTelephone(e.target.value)}
                            />
                        </label>
                        <label htmlFor="email-input">
                            Email
                            <input
                                type="email"
                                className="create_input"
                                placeholder="exe@exe.com"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password-input">
                            Senha
                            <input
                                type="password"
                                className="create_input"
                                placeholder="*********"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label htmlFor="confirm-password-input">
                            Confirme a senha
                            <input
                                type="password"
                                className="create_input"
                                placeholder="*********"
                                value={confirmPassword}
                                onChange={ (e) => setConfirmPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button className="create_button" type="submit">
                        Cadastrar
                    </button>
                    <br />
                    <p>
                        Já tem uma conta? <a href="/">Faça login</a>
                    </p>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </section>
        </div>
    );
}

export default NewUser;
