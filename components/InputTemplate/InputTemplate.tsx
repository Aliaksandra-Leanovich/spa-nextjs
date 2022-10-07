import styled from "@emotion/styled";
import React from "react";
import { Message, useForm, ValidationRule } from "react-hook-form";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
  name: string;
}
export type RegisterOptions = Partial<{
  required: Message | ValidationRule<boolean>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;
}>;

type InputProps = {
  type: string;
  placeholder: string;
  label: Path<IFormValues>;
  // register: UseFormRegister<IFormValues>;
  register: UseFormRegister<any>;
  errors: any;
};

export const InputTemplate = ({
  type,
  placeholder,
  errors,
  label,
  register,
}: InputProps) => {
  return (
    <Container>
      <StyledInput type={type} placeholder={placeholder} {...register(label)} />

      <ErrorMessage>
        {errors ? <span>{errors.message}</span> : null}
      </ErrorMessage>
    </Container>
  );
};

const StyledInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  padding: 16px;
  width: 100%;
  border: none;
  border-bottom: 2px solid black;

  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  grid-template-rows: repeat(2, 1fr);
  row-gap: 15px;
`;
const ErrorMessage = styled.p`
  position: absolute;
`;
