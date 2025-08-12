import style from './rodape.module.css'

const Rodape = ({ ano, criador }) => {
  return (
    <div className={style.rodape}>
      <h3>Curso React- </h3>
      <div className={style.foto}> 
      <img src='https://images.ctfassets.net/zojzzdop0fzx/4jWojoqYZoayRvNy8av2jr/e86d85fec34cc1cb4b7a96787b343759/react-icon.svg?fm=webp&w=3840&q=75' alt="simbolo React" />
     </div>
      <h3>{ano}</h3>
      <h3>{criador}</h3>
    </div>
  )
}

export {Rodape}