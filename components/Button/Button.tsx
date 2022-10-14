import React, { ButtonHTMLAttributes } from "react";
import { ButtonTextSC } from "../../ui/typography";
import { ButtonSC } from "./styles";

export enum Variants {
  primary = "primary",
  secondary = "secondary",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: Variants;
}

export const Button = ({ text, type, variant }: IButton) => {
  return (
    <ButtonSC variant={variant} type={type}>
      <ButtonTextSC>{text}</ButtonTextSC>
    </ButtonSC>
  );
};
