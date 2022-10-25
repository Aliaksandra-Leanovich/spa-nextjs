import React from "react";
import { StyledBurger } from "./style";
import { IBurgerProps } from "./types";

export const Burger = ({ isOpen, setOpen }: IBurgerProps) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
