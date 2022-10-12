import React, { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { ContainerSC, ErrorMessageSC, StyledInputSC } from "./style";

interface IFormValues {
  email: string;
  password: string;
  name?: string;
  errors?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<any>;
  errors: any;
}

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
