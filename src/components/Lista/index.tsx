import style from "./lista.module.scss";
import { Item } from "./Item";
import { Tarefas } from "../../types/tarefas";

export const Lista = ({ tarefas }: { tarefas: Tarefas[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudo do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item tarefa={item.tarefa} tempo={item.tempo} key={index} />
        ))}
      </ul>
    </aside>
  );
};
