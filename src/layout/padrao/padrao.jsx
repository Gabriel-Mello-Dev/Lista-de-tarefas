import { Cabecalho, Rodape } from '../../components';
import { Outlet } from 'react-router-dom';

const Padrao = () => {
  return (
    <div>
      <Cabecalho />
      <Outlet /> 
      <Rodape criador={"Gabriel Mello"} ano={2025}/>
    </div>
  );
};

export { Padrao };
