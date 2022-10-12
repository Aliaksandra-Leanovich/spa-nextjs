import React, { ButtonHTMLAttributes } from "react";
import { ButtonSC } from "./styles";

export enum Varients {
  primary = "primary",
  secondary = "secondary",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: Varients;
}

export const Button = ({ text, type, variant }: IButton) => {
  return (
    <ButtonSC variant={variant} type={type}>
      {text}
    </ButtonSC>
  );
};
