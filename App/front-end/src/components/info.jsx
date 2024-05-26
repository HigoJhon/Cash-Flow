import "../style/components/info.css";
import Logo from "../images/logo.jpg";
import Painel from "../images/icon/painel.png";
import Mais from "../images/icon/mais.png";
import Lapis from "../images/icon/ferramenta-lapis.png";
import Sair from "../images/icon/sair.png";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Info({ setPage, setActiveButton, activeButton}) {
    const navigate = useNavigate();

    const handleClick = (buttonPage) => {
        setActiveButton(buttonPage);
        setPage(buttonPage);
    };

    const handleExit = () => {
        console.log('sair');
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="container-info">
            <div className="info-logo">
                <img src={Logo} alt="logo" />
                <h1>Cash Flow</h1>
            </div>
            <div className="line" />
            <div className="div-info">
                <button 
                    onClick={() => handleClick('dashboard')} 
                    className={`info-button ${activeButton === 'dashboard' ? 'active' : ''}`}
                >
                    <img height="20px" src={Painel} alt="" /> Dashboard
                </button>
            </div>
            <div className="line" />
            <div className="div-info">
                <button 
                    onClick={() => handleClick('newWallet')} 
                    className={`info-button ${activeButton === 'newWallet' ? 'active' : ''}`}
                >
                    <img height="20px" src={Mais} alt="Ícone de adicionar" /> New Wallet
                </button>
                <button 
                    onClick={() => handleClick('edit')} 
                    className={`info-button ${activeButton === 'edit' ? 'active' : ''}`}
                >
                    <img height="20px" src={Lapis} alt="" /> Profile
                </button>
            </div>
            <div className="line" />
            <div className="div-info">
                <button className="info-button" onClick={ () => handleExit()}>
                    <img height="20px" src={Sair} alt="" /> Exit
                </button>
            </div>
        </div>
    );
}

Info.propTypes = {
    setPage: propTypes.func.isRequired,
    setActiveButton: propTypes.func.isRequired,
    activeButton: propTypes.string.isRequired,
};

export default Info;
