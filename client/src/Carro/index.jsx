import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadCarros() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await fetch('http://localhost:5000/carros');
        const data = await response.json();
        setCarros(data);
      } catch (error) {
        console.error('Erro ao buscar os carros:', error);
      }
    };

    fetchCarros();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/carros/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCarros(carros.filter((carro) => carro._id !== id));
        alert('Carro excluído com sucesso!');
      } else {
        alert('Erro ao excluir carro.');
      }
    } catch (error) {
      console.error('Erro ao excluir carro:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Carros</h2>
      <table className="table-container" border="1">
        <thead>
          <tr>
            <th>Código do Carro</th>
            <th>Nome do Carro</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro) => (
            <tr key={carro._id}>
              <td>{carro._id}</td>
              <td>{carro.nome}</td>
              <td>{carro.marca}</td>
              <td>{carro.modelo}</td>
              <td>
                <button onClick={() => handleDelete(carro._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
