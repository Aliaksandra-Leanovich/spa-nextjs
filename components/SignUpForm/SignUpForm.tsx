import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { routes } from "../../routes/routes";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import {
  ContainerForm,
  FormTitle,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLink,
} from "./styles";
import Link from "next/link";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: any) => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await router.push(routes.SIGNIN);
      })
      .catch(console.error);
  };
  return (
    <ContainerForm>
      <FormTitle>
        Get started for free. Add your whole team as your needs grow.{" "}
      </FormTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Enter your name"
        />
        <StyledInput
          type="email"
          {...register("email")}
          placeholder="Enter your email"
        />
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Enter your password"
        />
        <StyledButton type="submit">Sign Up</StyledButton>
      </StyledForm>
      <Link href="/signin">
        <StyledLink>I already have an account.</StyledLink>
      </Link>
    </ContainerForm>
  );
};
