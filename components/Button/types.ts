import { ButtonHTMLAttributes } from "react";
import { ButtonVariants } from "../../enums/ButtonVariants";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  handleClick?: () => void;
}
