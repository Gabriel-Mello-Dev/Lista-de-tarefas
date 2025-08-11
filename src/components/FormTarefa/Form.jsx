import { useState } from 'react';
import { Text, Botao } from '../../components';
import style from './formStyle.module.css';

const Form = ({ setTarefas }) => {
  const [nome, setNome] = useState("");

  const adicionarTarefa = (event) => {
    event.preventDefault();

    if (!nome.trim()) return;

    setTarefas((estadoAtual) => {
      const novaTarefa = {
        id: estadoAtual.length + 1,
        nome: nome,
      };
      return [...estadoAtual, novaTarefa];
    });

    setNome("");
  };

  const handleChange = (event) => {
    setNome(event.currentTarget.value);
  };

  
  return (
    <div>
      <form className={style.forms} onSubmit={adicionarTarefa}>
        <Text value={nome} onChange={handleChange} />
        <Botao texto="+" onClick={adicionarTarefa}/>
      </form>
    </div>
  );
};

export { Form };
