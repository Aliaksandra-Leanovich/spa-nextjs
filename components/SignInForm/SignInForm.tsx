import React from "react";
import { useForm } from "react-hook-form";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

export const SignInForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await router.push(routes.HOME);
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
          type="email"
          {...register("email")}
          placeholder="Enter your email"
        />
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Enter your password"
        />
        <StyledButton type="submit">Sign In</StyledButton>
      </StyledForm>
      <Link href="/signup">
        <StyledLink>I dont have an account.</StyledLink>
      </Link>
    </ContainerForm>
  );
};
