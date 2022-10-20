import React from "react";
import { ButtonSC } from "./styles";
import { IButton } from "./types";

export const Button = ({
  children,
  type,
  variant,
}: React.PropsWithChildren<IButton>) => {
  return (
    <ButtonSC variant={variant} type={type}>
      {children}
    </ButtonSC>
  );
};
