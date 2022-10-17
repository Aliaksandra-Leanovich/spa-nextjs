import React from "react";
import { StyledBurger } from "./style";

interface IOpen {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Burger = ({ open, setOpen }: IOpen) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
