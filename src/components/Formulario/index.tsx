import React from "react";
import { Botao } from "../Botao";
import style from "./formulario.module.scss";
import { Tarefas } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{
    setTarefa: React.Dispatch<React.SetStateAction<Tarefas[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.setTarefa(tarefaAntifa =>
    [
        ...tarefaAntifa,
        {
            ...this.state,
            selecionado: false,
            completo: false,
            id: uuidv4()
        }
    ])

    this.setState({
        tarefa:"",
        tempo:"00:00"
    })
  };

  render() {
    return (
      <form
        action=""
        className={style.novaTarefa}
        onSubmit={(e) => this.adicionarTarefa(e)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Oque você quer estudar"
            required
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            step="1"
            min="00:00"
            max="01:30"
            required
          />
        </div>
        <Botao type="submit" texto="adicionar" />
      </form>
    );
  }
}

export default Formulario;
