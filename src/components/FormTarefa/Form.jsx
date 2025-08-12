import { useState } from 'react';
import { Text, Botao, Loading } from '../../components';
import style from './formStyle.module.css';
import {useAppContext} from '../../hooks'
const Form = () => {
  const [nome, setNome] = useState("");
const {setTarefas}= useAppContext();

const {adicionarTarefa, LoadingCriar} =useAppContext();

  const submeterFormulario = (event) => {
    event.preventDefault();

if (!nome.trim()) {
  Alert.alert("Adicione algo à tarefa");
  return;
}

    adicionarTarefa(nome)

    setNome("");
  };

  const handleChange = (event) => {
    setNome(event.currentTarget.value);
  };

  
  return (
    <div>
          <h1 className={style.txt}>Adicione uma <span>Tarefa! </span></h1>
      <form className={style.forms} onSubmit={submeterFormulario}>
        <Text value={nome} onChange={handleChange} placeHolder="adicine uma tarefa" />

        <Botao texto={LoadingCriar ? <Loading/> : "+"} onClick={submeterFormulario}/>
      </form>
    </div>
  );
};

export { Form };
