import { Botao } from '../../../components'  
import { useAppContext } from '../../../hooks'
import style from './styleItens.module.css'
import { useState } from 'react'
import { Text } from '../../../components'

const Item = (props) => {
  const { nomeTarefa, id } = props
  const { removerTarefa, editarTarefa } = useAppContext()

  const [editando, setEditando] = useState(false)
  const [valorEditado, setValorEditado] = useState(nomeTarefa) 

  const onBlurTarefa = () => {
    editarTarefa(id, valorEditado) 
    setEditando(false)
  }

  const iniciarEdicao = () => {
    setValorEditado(nomeTarefa) 
    setEditando(true)
  }

  return (
    <li className={style.item}>
      {editando ? (
        <Text 
          type="text" 
          value={valorEditado} 
          onChange={(e) => setValorEditado(e.target.value)}
          onBlur={onBlurTarefa}
          autoFocus
        />
      ) : (
        <span onDoubleClick={iniciarEdicao}>
          {nomeTarefa}
        </span>
      )}

      <Botao 
        texto="-" 
        tipo="secundario"
        onClick={() => removerTarefa(id)}
      />
    </li>
  )
}

export { Item }
