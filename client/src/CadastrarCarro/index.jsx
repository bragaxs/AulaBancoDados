import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';

export default function CreateCarro() {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoCarro = { nome, marca, modelo };

    try {
      const response = await fetch('http://localhost:5000/carros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoCarro),
      });
      if (response.ok) {
        alert('Carro cadastrado com sucesso!');
        setNome('');
        setMarca('');
        setModelo('');
        navigate("/carros");
      } else {
        alert('Erro ao criar carro.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar carro:', error);
    }
  };

  return (
    <div className='container'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Cadastrar Carro</h2>
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
        <button type="submit">Cadastrar Carro</button>
      </form>
    </div>
  );
}
