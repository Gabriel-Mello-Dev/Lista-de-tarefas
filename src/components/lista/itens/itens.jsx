import { Botao } from '../../../components'  
import { useAppContext } from '../../../hooks'
import style from './styleItens.module.css'
import {useState} from 'react'
import {Text} from '../../../components'
const Item = (props) => {
  const { nomeTarefa, id } = props
const { removerTarefa, editarTarefa}= useAppContext();

const [editando, setEditando]= useState(false);

  return (
    <li className={style.item}>
     
     {editando ? (
        <Text 
          type="text" 
          defaultvalue={nomeTarefa} 
          onChange={(e) =>editarTarefa(id, e.currentTarget.value) } 
          onBlur= {()=> setEditando(false)}
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
