import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loading from './loading';
import "../style/components/newWallet.css";
import { postRequest } from '../Service/Request';

function NewWallet({ setPage, setActiveButton }) {
    const [loading, setLoading] = useState(true);
    const [walletName, setWalletName] = useState('');
    const [description, setDescription] = useState('');
    const [investment, setInvestment] = useState("");

    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    const handleInvestmentChange = (e) => {
        const value = e.target.value.replace(',', '.');
        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setInvestment(value.replace('.', ','));
        }
    };

    const handleClick = async () => {
        const userId = location.state.userId;
        if (!walletName || !description || !investment) {
            alert('Please fill all fields');
            return;
        }

        if (userId === undefined) {
            return <Link to="/" />;
        }

        try {
            const formattedInvestment = parseFloat(investment.replace(',', '.')).toFixed(2);
            const response = await postRequest("/Wallet", {
                nameId: userId,
                walletName: walletName,
                description: description,
                investment: formattedInvestment,
            });

            console.log(response);
            setPage('dashboard');
            setActiveButton('dashboard');
            <Link to="/dashboard" />;
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='container-wallet'>
            <h1 className='h1-wallet'>New Wallet</h1>
            <div>
                <form className='form-wallet'>
                    <label htmlFor="name">Name: </label>
                    <input className='input-wallet'
                        type="text"
                        name="name"
                        placeholder="House"
                        value={walletName}
                        onChange={(e) => setWalletName(e.target.value)}
                    />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input className='input-wallet'
                        type="text"
                        name="description"
                        placeholder="Home renovation expenses"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <label htmlFor="investment">Investment: </label>
                    <input className='input-wallet'
                        type="text"
                        name="investment"
                        placeholder="0,00"
                        value={investment}
                        onChange={handleInvestmentChange}
                        onBlur={() => setInvestment((prev) => parseFloat(prev.replace(',', '.')).toFixed(2).replace('.', ','))}
                    />
                    <br />
                    <button className='button-wallet' type="button" onClick={handleClick}>Create</button>
                </form>
            </div>
        </div>
    );
}

NewWallet.propTypes = {
    setPage: propTypes.func.isRequired,
    setActiveButton: propTypes.func.isRequired,
};

export default NewWallet;