  import style from "./lista.module.scss";
  import { Item } from "./Item";
  import { Tarefas } from "../../types/tarefas";

  interface Props {
    tarefas: Tarefas[],
    selecionarTarefa: (tarefaSelecionada: Tarefas) => void
  }

  export const Lista = ({ tarefas, selecionarTarefa }: Props) => {
    return (
      <aside className={style.listaTarefas}>
        <h2>Estudo do dia</h2>
        <ul>
          {tarefas.map((item, index) => (
            <Item tarefa={item.tarefa} tempo={item.tempo} key={index} id={`${index}`}  selecionado={item.selecionado}/>
          ))}
        </ul>
      </aside>
    );
  };
