import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import { Input } from "../Input/Input";
import { Button, ButtonVariants } from "../Button/Button";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Colors } from "../../ui/colors";
import { ContainerFormSC, EmailInUseMessageSC, StyledFormSC } from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";
import { IFormInput } from "./types";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

export const SignUpForm = () => {
  const router = useRouter();
  const [errorAuth, setErroAuth] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const handleAuthErrors = (error: string) => {
    switch (error) {
      case "auth/email-already-in-use":
        return setErroAuth("Email already in use.");
      case "auth/invalid-email":
        return setErroAuth("Password provided is not corrected.");
      case "auth/weak-password":
        return setErroAuth("The password is too weak.");
      default:
        return setErroAuth("An unexpected error occurred.");
    }
  };

  const onSubmit = (data: IFormInput) => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await router.push("/signin");
      })
      .catch((error) => {
        const errorCode = error.code;
        handleAuthErrors(errorCode);
      });
  };

  return (
    <ContainerFormSC>
      <Typography variant={VariantsTypography.h3} color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.{" "}
      </Typography>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        {errorAuth && <EmailInUseMessageSC>{errorAuth}</EmailInUseMessageSC>}
        <Input
          type="text"
          label="name"
          errors={errors.name}
          register={register}
          placeholder="Enter your name"
        />
        <Input
          type="email"
          label="email"
          errors={errors.email}
          register={register}
          placeholder="Enter your email"
        />
        <Input
          type="password"
          label="password"
          errors={errors.password}
          register={register}
          placeholder="Enter your password"
        />
        <Button
          type="submit"
          text="Sign Up"
          variant={ButtonVariants.secondary}
        />
      </StyledFormSC>
      <LinkTemplate
        href="/signin"
        text="I already have an account."
        variant={LinkVariants.linkSmall}
      />
    </ContainerFormSC>
  );
};
