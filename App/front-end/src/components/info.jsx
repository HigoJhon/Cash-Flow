import "../style/components/info.css";

function Info() {
    return (
        <div className="container-info">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <h3>Fluxo de Caixa</h3>
                <p>Criar novo fluxo</p>
                <p>Editar fluxo</p>
            </div>
            <div className="line" />
            <div>
                <h3>Ajuda</h3>
                <p>Perfil</p>
                <p>Configurações</p>
                <p>Suporte</p>
                <p>Sair</p>
            </div>
        </div>
    );
}

export default Info;