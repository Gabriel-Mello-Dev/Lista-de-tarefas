import { Cabecalho, Conteudo, Rodape, Form, Lista } from '../../components';
import { Outlet } from 'react-router-dom';
import {useState } from 'react'
const Inicial = () => {


const [tarefas, setTarefas] = useState([
  { id: 1, nome: "1321" },
  { id: 2, nome: "2321" },
  { id: 3, nome: "3fs" }
]);
 
    return (
    <div>
      <Form setTarefas={setTarefas} />
      <Lista  tarefas= {tarefas}/>
    </div>
  );
};

export { Inicial };
