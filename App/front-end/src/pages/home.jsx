import { useState } from "react";
import Footer from "../components/footer";
import Info from "../components/info";
import "../style/pages/home.css";
import Dashboard from "../components/dashboard";
import EditWallet from "../components/editWallet";
import NewWallet from "../components/newWallet";

function Home() {
  const [activeButton, setActiveButton] = useState('dashboard');
  const [page, setPage] = useState('dashboard');

  const renderPage = () => {
    if (page === 'dashboard') {
      return <Dashboard />;
    }
    if (page === 'newWallet') {
      return <NewWallet setPage={setPage} setActiveButton={setActiveButton} />;
    }
    if (page === 'edit') {
      return <EditWallet />;
    }
    return null; // Adicione um retorno padrão
  };

  return (
    <div className="container-home">
      <div className="div-home">
        <Info
          setActiveButton={setActiveButton}
          setPage={setPage}
          activeButton={activeButton}
        />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
