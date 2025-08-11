import style from './listaStyle.module.css'
import {Item} from './itens'
import { useAppContext } from '../../hooks'

const Lista =()=>{

const {tarefas}= useAppContext();

    return(

<ul className={style.lista}>

{!tarefas.length && (

   
    <h2> 
    Não há tarefas cadastradas</h2>
)}

{tarefas.map(item=> 





<Item 
nomeTarefa={item.nome} 
key={item.id} 
id={item.id}/>
)}
</ul>

    )

}

export {Lista}