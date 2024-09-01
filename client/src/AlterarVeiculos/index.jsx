import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMatricula() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [modelo, setModelo] = useState('');
  const [Marca, setMarca] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { Veiculo,valor, modelo,Marca };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Matrícula atualizada com sucesso!');
        navigate("/matriculas");
      } else {
        alert('Erro ao atualizar veiculo.');
      }
    } catch (error) {
      console.error('Erro ao atualizar veiculo:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Veiculo</h2>
      <input
        type="text"
        placeholder="ID do Veiculo"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Veiculo"
        value={veiculo}
        onChange={(e) => setVeiculo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor"
        value={Valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Modelo"
        value={curso}
        onChange={(e) => setModelo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Marca"
        value={curso}
        onChange={(e) => setMarca(e.target.value)}
        required
      />
      <button type="submit">Atualizar <Veiculo></Veiculo></button>
    </form>
    </div>
  );
}
