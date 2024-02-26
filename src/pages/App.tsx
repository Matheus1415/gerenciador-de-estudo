import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import { Lista } from '../components/Lista';
import style from "./app.module.scss"
import { Cronometro } from '../components/Cronometro';
import { Tarefas } from '../types/tarefas';

function App() {

  const [tarefas, setTarefa] = useState<Tarefas[]>([])

  return (
  <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa}/>
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;
