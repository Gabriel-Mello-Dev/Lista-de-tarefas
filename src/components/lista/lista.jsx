import style from './listaStyle.module.css'
import {Item} from './itens'
import { useAppContext } from '../../hooks'
import {Loading} from '../../components'
const Lista =()=>{

const {tarefas, loadingCarregar}= useAppContext();

    return(

<ul className={style.lista}>
{loadingCarregar && (

<p>Carregando.... <Loading/></p>

)}

{!loadingCarregar && !tarefas.length && (

   
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