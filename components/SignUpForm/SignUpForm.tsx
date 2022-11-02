import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ButtonVariants, LinkVariants, VariantsTypography } from "../../enums";
import { Typography, Colors } from "../../ui";
import { app } from "../../utils/firebase";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "../Link";
import { ContainerFormSC, EmailInUseMessageSC, StyledFormSC } from "./styles";
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

const getAuthError = (error: string) => {
  switch (error) {
    case "auth/email-already-in-use":
      return "Email already in use.";
    case "auth/invalid-email":
      return "Password provided is not corrected.";
    case "auth/weak-password":
      return "The password is too weak.";
    default:
      return "An unexpected error occurred.";
  }
};

export const SignUpForm = () => {
  const router = useRouter();
  const [error, setError] = useState(getAuthError(""));

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
        await router.push("/signin");
      })
      .catch((error) => {
        setError(getAuthError(error.code));
      });
  };

  return (
    <ContainerFormSC>
      <Typography variant={VariantsTypography.h3} color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.
      </Typography>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        {error && <EmailInUseMessageSC>{error}</EmailInUseMessageSC>}
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
        <Button type="submit" variant={ButtonVariants.secondary}>
          Sign Up
        </Button>
      </StyledFormSC>
      <Link
        href="/signin"
        text="I already have an account."
        variant={LinkVariants.linkSmall}
      />
    </ContainerFormSC>
  );
};
