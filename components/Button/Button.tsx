import React, { ButtonHTMLAttributes } from "react";
import { Typography, VariantsTypography } from "../../ui/typography";

import { ButtonSC } from "./styles";

export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: ButtonVariants;
}

export const Button = ({ text, type, variant }: IButton) => {
  return (
    <ButtonSC variant={variant} type={type}>
      <Typography variant={VariantsTypography.button}>{text}</Typography>
    </ButtonSC>
  );
};
