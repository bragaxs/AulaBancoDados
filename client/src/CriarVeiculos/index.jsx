import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMatricula() {
  const [nome, setnome] = useState('');
  const [valor, setvalor] = useState('');
  const [modelo, setmodelo] = useState('');
  const [marca, setmarca] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { nome, valor, modelo,marca };

    try {
      const response = await fetch('http://localhost:5000/matriculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Veiculo Registrado Com Sucesso!');
        setnome('');
        setvalor('');
        setmodelo('');
        navigate("/veiculos");
      } else {
        alert('Erro ao criar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao criar matrícula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Registar Veiculo</h2>
      <input
        type="text"
        placeholder="Nome do Veiculo"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Valor do Veiculo"
        value={valor}
        onChange={(e) => setvalor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Modelo do Veiculo"
        value={modelo}
        onChange={(e) => setmodelo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Marca do Veiculo"
        value={modelo}
        onChange={(e) => setmodelo(e.target.value)}
        required
      />
      <button type="submit">Criar Registro de Veiculo</button>
    </form>
    </div>
  );
}
