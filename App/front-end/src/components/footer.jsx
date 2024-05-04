import "../style/components/footer.css";

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>Sobre</h3>
                    <p>Descrição breve sobre o seu serviço ou empresa.</p>
                    <div class="contact">
                        <span><i class="fas fa-envelope"></i> contato@exemplo.com</span>
                    </div>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section links">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="/home">Início</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2024 Nome da sua Empresa. Todos os direitos reservados.
            </div>
        </footer>
    )
};

export default Footer;