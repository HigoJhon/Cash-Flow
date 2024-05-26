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
    const [investment, setInvestment] = useState(0);

    const location = useLocation();

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, []);
  
    if (loading) {
      return <Loading />;
    }

    const handleClick = async () => {
        const userId = location.state.userId;
        try {
            const response =  await postRequest("/Wallet", {
                nameId: userId,
                walletName: walletName,
                description: description,
                investment: investment,
            });

            console.log(response);
            setPage('dashboard');
            setActiveButton('dashboard');
            <Link to="/dashboard" />;
        } catch (error) {
            console.log(error);
        }
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
                        onChange={ (e) => setWalletName(e.target.value) }
                    />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input className='input-wallet' 
                        type="text" 
                        name="description" 
                        placeholder="Home renovation expenses" 
                        value={description}
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                    <br />
                    <label htmlFor="balance">Investment: </label>
                    <input className='input-wallet' 
                        type="number" 
                        name="investment" 
                        placeholder="0,00" 
                        value={investment} 
                        onChange={ (e) => setInvestment(e.target.value) }
                    />
                    <br />
                    <button className='button-wallet' type="button" onClick={ () => handleClick() }>Create</button>
                </form>
            </div>
        </div>
    )
}

NewWallet.propTypes = {
    setPage: propTypes.func.isRequired,
    setActiveButton: propTypes.func.isRequired,
};

export default NewWallet;