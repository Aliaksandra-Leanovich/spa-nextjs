import React from "react";
import { StyledBurger } from "./style";
import { IOpen } from "./types";

export const Burger = ({ isOpen, setOpen }: IOpen) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
