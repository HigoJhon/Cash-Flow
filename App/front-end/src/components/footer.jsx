import "../style/components/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Sobre</h3>
                    <p>Descrição breve sobre o seu serviço ou empresa.</p>
                    <div className="contact">
                        <span><i className="fas fa-envelope"></i> contato@exemplo.com</span>
                    </div>
                    {/* <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div> */}
                </div>
                
                <div className="footer-section links">
                    <h3>Links Rápidos</h3>
                    <p>Imagem de <a target="_blank" href="https://br.freepik.com/psd-gratuitas/ed-ilustracao-de-criptomoeda-com-monitor-e-grafico_29014159.htm" rel="noreferrer">Freepik</a></p>
                    <p>Icones de <a target="_blank" href="https://www.flaticon.com/br/icones-gratis/painel-de-controle" title="painel de controle ícones" rel="noreferrer">Flaticon</a></p>
                    {/* <ul>
                        <li><a href="/home">Início</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul> */}
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Nome da sua Empresa. Todos os direitos reservados.
            </div>
        </footer>
    )
};

export default Footer;