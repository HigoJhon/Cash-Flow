import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

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
        <div>
            <h1>New Wallet</h1>
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="João Silva"/>
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" name="description" placeholder="Gastos com viagem"/>
                    <br />
                    <label htmlFor="balance">investment: </label>
                    <input type="number" id="investment" name="investment" placeholder="0,00"/>
                    <br />
                    <button type="submit" onClick={ () => handleClick() }>Create</button>
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