import { Cabecalho, Conteudo, Rodape, Form, Lista } from '../../components';
import { Outlet } from 'react-router-dom';
import {useState } from 'react'
import { useAppContext } from '../../hooks';
const Inicial = () => {

const {tarfeas}= useAppContext()


 
    return (
    <div>
      <Form/>
      <Lista/>
    </div>
  );
};

export { Inicial };
