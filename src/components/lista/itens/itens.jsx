import { Botao } from '../../../components'  
import { useAppContext } from '../../../hooks'
import style from './styleItens.module.css'

const Item = (props) => {
  const { nomeTarefa, id } = props
const { removerTarefa}= useAppContext();

  return (
    <li className={style.item}>
      {nomeTarefa}
      <Botao texto="-" tipo="secundario"
      onClick= {()=>removerTarefa(id) } 

      />
    </li>
  )
}

export { Item }
