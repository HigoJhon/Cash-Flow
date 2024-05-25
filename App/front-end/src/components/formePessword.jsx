import propTypes from 'prop-types';

function FormePassword({ setPassword, password }) {
    const handlePasswordChange = (e) => {
        setPassword({ ...password, password: e.target.value });
    };

    const handleConfirmPasswordChange = (e) => {
        setPassword({ ...password, confirmPassword: e.target.value });
    };

    return (
        <>
            <label htmlFor="password-input">
                Senha
                <input
                    type="password"
                    className="create_input"
                    placeholder="*********"
                    value={password.password}
                    onChange={handlePasswordChange}
                />
            </label>
            <label htmlFor="confirm-password-input">
                Confirme a senha
                <input
                    type="password"
                    className="create_input"
                    placeholder="*********"
                    value={password.confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </label>
        </>
    );
}

FormePassword.propTypes = {
    setPassword: propTypes.func.isRequired,
    password: propTypes.shape({
        password: propTypes.string.isRequired,
        confirmPassword: propTypes.string.isRequired,
    }).isRequired,
};

export default FormePassword;
