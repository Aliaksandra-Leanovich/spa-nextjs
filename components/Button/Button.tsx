import React from "react";
import { StyledButtonSC } from "./styles";

interface IButton {
  background: string;
  color: string;
  type: "button" | "submit" | "reset";
  text: string;
  padding: string;
}

export const Button = ({ text, type, color, background, padding }: IButton) => {
  return (
    <StyledButtonSC
      color={color}
      type={type}
      background={background}
      padding={padding}
    >
      {text}
    </StyledButtonSC>
  );
};
