import { Link } from 'react-router-dom';
import '../globals.css';

export default function ListarVeiculos() {
    return (
        <div className='container'>
            <h2>Inserir Carros</h2>
            <div className="card-container">
                <Link to="/CriarVeiculos" className="card">
                    <div>Registrar Veiculos</div>
                </Link>
                <Link to="/ListarMatricula" className="card">
                    <div>Listar Veiculos</div>
                </Link>
                <Link to="/AlterarVeiculos" className="card">
                    <div>Editar Veiculos</div>
                </Link>
            </div>
        </div>
    );
}
