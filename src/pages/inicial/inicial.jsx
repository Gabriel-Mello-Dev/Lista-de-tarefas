import { Cabecalho, Conteudo, Rodape, Form, Lista,  Loading } from '../../components';
import { Outlet } from 'react-router-dom';
import {useState } from 'react'
import { useAppContext } from '../../hooks';
import style from './style.module.css'

const Inicial = () => {

const {tarfeas}= useAppContext()


 
    return (
    <div className={style.container}>
      <Form/> 
      <Lista/>


    </div>
  );
};

export { Inicial };
