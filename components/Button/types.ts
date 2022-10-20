import { ButtonHTMLAttributes } from "react";

export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: ButtonVariants;
}
