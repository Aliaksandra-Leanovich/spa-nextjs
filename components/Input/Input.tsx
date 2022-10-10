import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { ContainerSC, ErrorMessageSC, StyledInputSC } from "./style";

interface IFormValues {
  email: string;
  password: string;
  name: string;
}

type InputProps = {
  type: string;
  placeholder: string;
  label: Path<IFormValues>;
  register: UseFormRegister<any>;
  errors: any;
};

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

      <ErrorMessageSC>
        {errors ? <div>{errors.message}</div> : null}
      </ErrorMessageSC>
    </ContainerSC>
  );
};
