import React, { ButtonHTMLAttributes } from "react";
import { ButtonSC } from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  color: string;
  text: string;
  padding: string;
}

export const Button = ({ text, type, color, background, padding }: IButton) => {
  return (
    <ButtonSC
      color={color}
      type={type}
      background={background}
      padding={padding}
    >
      {text}
    </ButtonSC>
  );
};
