import style from './rodape.module.css'

const Rodape = ({ ano, criador }) => {
  return (
    <div className={style.rodape}>
      <h3>Curso React-</h3>
      <h3>{ano}</h3>
      <h3>{criador}</h3>
    </div>
  )
}

export {Rodape}