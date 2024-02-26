import React from "react";
import style from "./botao.module.scss";

interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined
}

export const Botao: React.FC<BotaoProps> = ({ texto, type = "button" }) => {
  return <button type={type} className={style.botao}>{texto}</button>;
};
