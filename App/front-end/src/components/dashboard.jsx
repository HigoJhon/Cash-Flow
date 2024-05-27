import { useEffect, useState } from "react";
import Loading from "./loading";
import { useLocation } from "react-router-dom";
import { getAllRequests } from "../Service/Request";
import "../style/components/dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [ response, setResponse ] = useState([]);

  const location = useLocation();

  const getWallets = async () => {
    const userId = location.state.userId;

    try {
      const data = await getAllRequests(`/Wallet/${userId}`);
      setResponse(data);
      console.log(data);
    
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getWallets();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="container-dashboard">
      <div className="div-dashboard">
        <ul>
          {response.map((wallet) => (
            <li key={wallet.walletId}>
              <h2>{wallet.walletName}</h2>
              <p>{wallet.description}</p>
              <p>Investiment: {wallet.investment}</p>
              <br />
              <button type="button">Fluxo</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Dashboard;