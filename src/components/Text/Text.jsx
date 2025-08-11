import style from './styleTxt.module.css'


const Text =(props)=>{

    
    return(
     
        <input {...props}
         type="text"
          className={style.campoTexto}/>
    )

}

export {Text}