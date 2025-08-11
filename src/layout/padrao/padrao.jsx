import { Cabecalho, Rodape } from '../../components';
import { Outlet } from 'react-router-dom';

import { useAppContext } from '../../hooks';
const Padrao = () => {
  
  const {criador}= useAppContext()
  return (
    <div>
      <Cabecalho />
      <Outlet /> 
      <Rodape criador={criador} ano={2025}/>
    </div>
  );
};

export { Padrao };
