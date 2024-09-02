import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateCarro() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { nome, marca, modelo };

    try {
      const response = await fetch(`http://localhost:5000/carros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Carro atualizado com sucesso!');
        navigate("/carros");
      } else {
        alert('Erro ao atualizar carro.');
      }
    } catch (error) {
      console.error('Erro ao atualizar carro:', error);
    }
  };

  return (
    <div className='container'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Atualizar Carro</h2>
        <input
          type="text"
          placeholder="ID do Carro"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do Carro"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <button type="submit">Atualizar Carro</button>
      </form>
    </div>
  );
}
