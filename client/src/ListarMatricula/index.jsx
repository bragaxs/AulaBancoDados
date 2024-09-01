import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await fetch('http://localhost:5000/matriculas');
        const data = await response.json();
        setVeiculos(data);
      } catch (error) {
        console.error('Erro ao buscar as matrículas:', error);
      }
    };

    fetchVeiculos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setVeiculos(veiculos.filter((veiculo) => veiculo._id !== id));
        alert('Matrícula excluída com sucesso!');
      } else {
        alert('Erro ao excluir matrícula.');
      }
    } catch (error) {
      console.error('Erro ao excluir matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Veículos</h2>
      <table className="table-container" border="1">
        <thead>
          <tr>
            <th>Código do Veículo</th>
            <th>Nome do Veículo</th>
            <th>Valor</th>
            <th>Modelo</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculos) => (
            <tr key={veiculos._id}>
              <td>{veiculos._id}</td>
              <td>{veiculos.nome}</td>
              <td>{veiculos.valor}</td>
              <td>{veiculos.modelo}</td>
              <td>{veiculos.marca}</td>
              <td>
                <button onClick={() => handleDelete(veiculos._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
