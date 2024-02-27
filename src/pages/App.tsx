import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { Lista } from '../components/Lista';
import style from "./app.module.scss"
import { Cronometro } from '../components/Cronometro';
import { Tarefas } from '../types/tarefas';

function App() {

  const [tarefas, setTarefa] = useState<Tarefas[]>([])
  const [selecionado, setSelecionado] = useState<Tarefas>();

  function selecionaTarefa(taerfasSelcionada: Tarefas) {
    setSelecionado(taerfasSelcionada)
    setTarefa(tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
      ...tarefa,
      selecionado:tarefa.id === taerfasSelcionada.id ? true : false
    })))
  }

  return (
  <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa}/>
      <Lista 
        tarefas={tarefas} 
        selecionarTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
  );
}

export default App;
