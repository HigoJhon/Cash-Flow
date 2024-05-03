import person from "../images/Open Peeps.png";
import "../style/pages/newUser.css";

function NewUser() {
    return (
        <div className="container-newUser">
            <div className="div-img">
                <img src={person} alt="icon" />
            </div>
            <section>
                <form className="form-newUser">
                    <h1>Criar conta</h1>
                    <div className="div-input-newUser">
                        <label htmlFor="name-input">
                            Nome
                            <input
                                type="text"
                                className="create_input"
                                placeholder="Joao da Silva"
                            />
                        </label>
                        <label htmlFor="phone-input">
                            Numero
                            <input
                                type="number"
                                className="create_input"
                                placeholder="21 99999-9999"
                            />
                        </label>
                        <label htmlFor="email-input">
                            Email
                            <input
                                type="email"
                                className="create_input"
                                placeholder="exe@exe.com"
                            />
                        </label>
                        <label htmlFor="password-input">
                            Senha
                            <input
                                type="password"
                                className="create_input"
                                placeholder="*********"
                                visible="false"
                            />
                        </label>
                        <label htmlFor="confirm-password-input">
                            Confirme a senha
                            <input
                                type="password"
                                className="create_input"
                                placeholder="*********"
                                visible="false"
                            />
                        </label>
                    </div>
                    <button
                        className="create_button"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                    <br />
                    <p>
                        Já tem uma conta? <a href="/">Faça login</a>
                    </p>
                </form>
            </section>
        </div>
    );
}

export default NewUser;