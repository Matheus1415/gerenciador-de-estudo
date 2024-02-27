import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ErroUser from '../ErrorUser';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  const [erro, setErro] = useState<string>('');

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if(tarefa === ""){
      mostrarErro("Parece que você não colocou o nome da tarefa")
    }else{
      setTarefas(tarefasAntigas => 
        [
          ...tarefasAntigas,
          {
            tarefa,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
          }
        ]
      )
    }
    
    setTarefa("");
    setTempo("00:00");

  }

  
    function mostrarErro(texto: string) {
      setErro(texto);
    }


  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <ErroUser texto={erro} visivel={erro !== ''}/>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          placeholder="O que você quer estudar"
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
}

export default Formulario;