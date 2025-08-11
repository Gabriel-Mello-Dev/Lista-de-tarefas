import { useState } from 'react';
import { Text, Botao } from '../../components';
import style from './formStyle.module.css';
import {useAppContext} from '../../hooks'
const Form = () => {
  const [nome, setNome] = useState("");
const {setTarefas}= useAppContext();

const {adicionarTarefa} =useAppContext();

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nome.trim()) {return};

    adicionarTarefa(nome)

    setNome("");
  };

  const handleChange = (event) => {
    setNome(event.currentTarget.value);
  };

  
  return (
    <div>
      <form className={style.forms} onSubmit={submeterFormulario}>
        <Text value={nome} onChange={handleChange} />
        <Botao texto="+" onClick={submeterFormulario}/>
      </form>
    </div>
  );
};

export { Form };
