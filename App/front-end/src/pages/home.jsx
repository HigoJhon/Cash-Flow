import Footer from "../components/footer";
import Info from "../components/info";
import "../style/pages/home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="div-home">
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default Home;