import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import "../style/components/newWallet.css";

function NewWallet({ setPage, setActiveButton }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, []);
  
    if (loading) {
      return <Loading />;
    }

    const handleClick = () => {
        setPage('dashboard');
        setActiveButton('dashboard');
        <Link to="/dashboard" />;
    }

    return (
        <div className='container-wallet'>
            <h1 className='h1-wallet'>New Wallet</h1>
            <div>
                <form className='form-wallet'>
                    <label htmlFor="name">Name: </label>
                    <input className='input-wallet' type="text" id="name" name="name" placeholder="House"/>
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input className='input-wallet' type="text" id="description" name="description" placeholder="Home renovation expenses"/>
                    <br />
                    <label htmlFor="balance">Investment: </label>
                    <input className='input-wallet' type="number" id="investment" name="investment" placeholder="0,00"/>
                    <br />
                    <button className='button-wallet' type="submit" onClick={ () => handleClick() }>Create</button>
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