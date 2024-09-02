import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div class="imagem-container">
            <div id="imagem">
            </div>
            <div className='container-imagem'>
                <h2>Concessionária</h2>
                <div className="card-container">
                    <Link to="/carro/cadastrar" className="card">
                        <div>Registrar Carro</div>
                    </Link>
                    <Link to="/carros" className="card">
                        <div>Lista de Carros</div>
                    </Link>
                    <Link to="/carros/alterar" className="card">
                        <div>Editar Carro</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
