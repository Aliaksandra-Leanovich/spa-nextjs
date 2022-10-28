import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldValues } from "react-hook-form";
import { Path, UseFormRegister } from "react-hook-form";
import { ContainerSC, ErrorMessageSC, StyledInputSC } from "./style";

interface IFormValues {
  email: string;
  password: string;
  name?: string;
  errors?: string;
}

interface IRegister extends FieldValues, IFormValues {}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IRegister>;
  errors: FieldError | undefined;
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
      {errors && <ErrorMessageSC>{errors.message}</ErrorMessageSC>}
    </ContainerSC>
  );
};
