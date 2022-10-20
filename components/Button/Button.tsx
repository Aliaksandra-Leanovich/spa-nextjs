import React from "react";
import { ButtonSC } from "./styles";
import { IButton } from "./types";

export const Button = ({ text, type, variant }: IButton) => {
  return (
    <ButtonSC variant={variant} type={type}>
      {text}
    </ButtonSC>
  );
};
