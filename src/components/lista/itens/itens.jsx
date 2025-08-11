import { Botao } from '../../../components'  
import style from './styleItens.module.css'

const Item = (props) => {
  const { nomeTarefa } = props

  return (
    <li className={style.item}>
      {nomeTarefa}
      <Botao texto="-" tipo="secundario" />
    </li>
  )
}

export { Item }
