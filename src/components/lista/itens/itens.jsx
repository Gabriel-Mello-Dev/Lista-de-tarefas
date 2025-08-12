import { Botao } from '../../../components'  
import { useAppContext } from '../../../hooks'
import style from './styleItens.module.css'
import {useState} from 'react'
import {Text} from '../../../components'
const Item = (props) => {
  const { nomeTarefa, id } = props
const { removerTarefa, editarTarefa}= useAppContext();

const [editando, setEditando]= useState(false);
const onBlurTarefa = (event) =>{

const nomeTarefa= event.currentTarget.value;
editarTarefa(id, nomeTarefa);

setEditando(false)
}
  return (
    <li className={style.item}>
     
     {editando ? (
        <Text 
          type="text" 
          defaultvalue={nomeTarefa} 
          onBlur= {onBlurTarefa}
          autoFocus
        />
      ) : (

        <span onDoubleClick={()=>setEditando(true)}> {nomeTarefa}</span>
        
      )}
     
     

      <Botao texto="-" tipo="secundario"
      onClick= {()=>removerTarefa(id) } 

      />
    </li>
  )
}

export { Item }
