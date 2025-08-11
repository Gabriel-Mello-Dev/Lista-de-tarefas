import styles from './cabecalho.module.css';
import {Link} from 'react-router-dom'
const Cabecalho = () => {
    return (
        <div className={styles.Cabecalho}>
           <Link to="/">
           
            <h1>
                <span>Lista </span> 
                Legal :D
            </h1>
            </Link>

  <Link to="/sobrenos">
           
            <h1>
       Sobre-Nós
            </h1>
            </Link>

        </div>
    );
};
export {Cabecalho};
