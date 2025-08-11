import {createContext, useState} from 'react'
import { App } from '../App';

export const AppContext = createContext({});

export const AppContextProvider=  (props) =>{

const{ children}=props
const [tarefas, setTarefas] = useState([
  { id: 1, nome: "1321" },
  { id: 2, nome: "2321" },
  { id: 3, nome: "3fs" }
]);

const adicionarTarefa= (nome)=>{

      setTarefas((estadoAtual) => {
      const novaTarefa = {
        id: estadoAtual.length + 1,
        nome: nome,
      };
      return [...estadoAtual, novaTarefa];
    });

}

  const removerTarefa = (idTarefa) => {
    setTarefas(estadoAtual => {
      return estadoAtual.filter(tarefa => tarefa.id !== idTarefa);
    });
  }


  const editarTarefa = (id, nomeTarefa)=>{

setTarefas(estadoAtual =>{
   const tarefasAtualizadas= estadoAtual.map(tarefa=>{

        return tarefa.id== id ? {
            ...tarefa,
            nome: nomeTarefa
        }: tarefa
    } )

return [
    ...tarefasAtualizadas,
];
})

  }
const [criador,setCriador]= useState("Gabriel Mello")

return (
    <AppContext.Provider value={{criador, tarefas, adicionarTarefa, removerTarefa, editarTarefa}}>
        {children}
    </AppContext.Provider>
);

}