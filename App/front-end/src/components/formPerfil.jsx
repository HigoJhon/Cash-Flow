import propTypes from 'prop-types';

function FormePerfil({ userForme, setUserForme }) {
    const { name, telephone, email } = userForme;

    const setName = (name) => {
        setUserForme({ ...userForme, name });
    }

    const setTelephone = (telephone) => {
        setUserForme({ ...userForme, telephone });
    }

    const setEmail = (email) => {
        setUserForme({ ...userForme, email });
    }

    return (
        <>
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
        </>
    )
}

FormePerfil.propTypes = {
    setUserForme: propTypes.func.isRequired,
    userForme: propTypes.shape({
        name: propTypes.string.isRequired,
        telephone: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
    }).isRequired,
};

export default FormePerfil;