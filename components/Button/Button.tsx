import React, { ButtonHTMLAttributes } from "react";
import { ButtonSC } from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: string;
}

export const Button = ({ text, type, variant }: IButton) => {
  return (
    <ButtonSC variant={variant} type={type}>
      {text}
    </ButtonSC>
  );
};
