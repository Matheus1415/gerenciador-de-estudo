import React from "react";
import Botao from "../Botao";
import style from "./formulario.module.scss"

class Formulario extends React.Component {
    render(){
        return(
            <form action="" className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicionar um novo estudo</label>
                    <input type="text" 
                        name="tarefa" 
                        id="tarefa" 
                        placeholder="Oque você quer estudar" 
                        required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        name="tempo" 
                        id="tempo" 
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario