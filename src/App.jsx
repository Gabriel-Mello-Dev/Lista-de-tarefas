import { Cabecalho, Conteudo, Rodape, Form, Lista} from './components';
import {Inicial} from './pages'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routers';


function App() {
  return (

<BrowserRouter>

<Router/>


</BrowserRouter>
  );
}

export {App}