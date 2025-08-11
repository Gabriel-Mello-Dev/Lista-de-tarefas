import style from './styleBtn.module.css'
import { TIPO_BOTAO } from './constantes'

const Botao = (props) => {
  const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;
  
  return (
    <button
      type="button"
      data-tipo={tipo}
      {...outrasProps}
      className={style.botao}
    >
      {texto}
    </button>
  );
};

export { Botao };
