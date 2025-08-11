import style from './listaStyle.module.css'
import {Item} from './itens'

const Lista =(props)=>{

const {tarefas}= props
    return(

<ul className={style.lista}>
{tarefas.map(item=> 

<Item nomeTarefa={item.nome} 
key={item.id}/>

)}
</ul>

    )

}

export {Lista}