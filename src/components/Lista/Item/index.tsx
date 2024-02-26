import React from "react";
import style from '../lista.module.scss'
import { Tarefas } from "../../../types/tarefas";


export const Item: React.FC<Tarefas> = ({ tarefa, tempo, selecionado, completo, id }) => {
    return (
        <>
            <li className={style.item}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </>
    )
}
