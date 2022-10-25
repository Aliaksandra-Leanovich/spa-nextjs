import React from "react";
import { StyledBurger } from "./style";

interface IOpen {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const Burger = ({ isOpen, setOpen }: IOpen) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
