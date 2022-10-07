import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { routes } from "../../routes/routes";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import { ContainerForm, FormTitle, StyledForm } from "./styles";
import { InputTemplate } from "../InputTemplate/InputTemplate";
import { ButtonTemplate } from "../ButtonTemplate/ButtonTemplate";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name must be at least 6 characters")
    .max(20, "Name must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInput) => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
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
        <InputTemplate
          type="text"
          label="name"
          errors={errors.name}
          register={register}
          placeholder="Enter your name"
        />
        <InputTemplate
          type="email"
          label="email"
          errors={errors.email}
          register={register}
          placeholder="Enter your email"
        />
        <InputTemplate
          type="password"
          label="password"
          errors={errors.password}
          register={register}
          placeholder="Enter your password"
        />
        <ButtonTemplate
          type="submit"
          text="Sign Up"
          color="blue"
          background="yellow"
        />
      </StyledForm>
      <LinkTemplate href="/signin" text="I already have an account." />
    </ContainerForm>
  );
};
