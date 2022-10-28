import React from "react";
import { StyledBurger } from "./style";
import { IBurgerProps } from "./types";

export const Burger = ({ isOpen, setOpen }: IBurgerProps) => {
  const handleClick = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <StyledBurger isOpen={isOpen} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
