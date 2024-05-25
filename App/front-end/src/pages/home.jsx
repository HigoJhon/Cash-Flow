import { useState } from "react";
import Footer from "../components/footer";
import Info from "../components/info";
import "../style/pages/home.css";
import Dashboard from "../components/dashboard";
import EditPerfil from "../components/editPerfil";
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
      return <EditPerfil />;
    }
    return null;
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
