import React from "react";
import style from '../lista.module.scss'
import { Tarefas } from "../../../types/tarefas";

interface Propos  extends Tarefas{
    selecionarTarefa?: (tarefaSelecionada: Tarefas) => void
}

export const Item = ({ tarefa, tempo, selecionado, completo, id, selecionarTarefa }: Propos) => {
    return (
      <>
        <li 
          className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
          onClick={() => {
            selecionarTarefa && selecionarTarefa({
              tarefa,
              tempo,
              selecionado,
              completo,
              id
            });
            return void selecionarTarefa;
          }}
        >
          <h3>{tarefa}</h3>
          <span>{tempo}</span>
        </li>
      </>
    );
  };
  