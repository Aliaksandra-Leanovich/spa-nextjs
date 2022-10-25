import React from "react";
import { StyledBurger } from "./style";

interface IOpen {
  open: boolean;
  isOpen: (value: boolean) => void;
}

export const Burger = ({ open, isOpen }: IOpen) => {
  return (
    <StyledBurger open={open} onClick={() => isOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
