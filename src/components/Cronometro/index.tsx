import React, { useState, useEffect } from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { ErroUser } from '../ErrorUser';

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  },[selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000)
  }

  function mostrarErro(texto: string) {
    setErro(texto);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <ErroUser texto={erro} visivel={erro !== ''}/>
      <Botao 
        onClick={() => {selecionado? regressiva(tempo) : mostrarErro("Ops parece que não a nada selecionado")} }
      >
        Começar!
      </Botao>
    </div>
  )
}
