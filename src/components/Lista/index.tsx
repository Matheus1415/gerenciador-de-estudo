import React from "react";
import style from "./lista.module.scss"

export const Lista = () =>{
    const tarefa = [
        {tarefa:"react", tempo:"01:00:00"},
        {tarefa:"javascript", tempo:"01:50:00"},
        {tarefa:"typescript", tempo:"00:35:00"}
    ]
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {
                    tarefa.map((item, index) => (
                        <li key={index} className={style.item}>
                            <h3>{item.tarefa}</h3>
                            <span>{item.tempo}</span>
                        </li>    
                    ))
                }
            </ul>
        </aside>
    )
}