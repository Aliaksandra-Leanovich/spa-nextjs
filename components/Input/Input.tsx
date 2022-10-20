import React from "react";
import { ContainerSC, ErrorMessageSC, StyledInputSC } from "./style";
import { InputProps } from "./types";

export const Input = ({
  type,
  placeholder,
  errors,
  label,
  register,
}: InputProps) => {
  return (
    <ContainerSC>
      <StyledInputSC
        type={type}
        placeholder={placeholder}
        {...register(label)}
      />
      {errors && <ErrorMessageSC>{errors.message}</ErrorMessageSC>}
    </ContainerSC>
  );
};
