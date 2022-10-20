import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import { ContainerFormSC, NoUserMessageSC, StyledFormSC } from "./styles";
import { Input } from "../Input/Input";
import { Button, ButtonVariants } from "../Button/Button";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { IUserForm } from "./types";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const SignInForm = () => {
  const router = useRouter();
  const [errorAuth, setErroAuth] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const handleAuthErrors = (error: string) => {
    switch (error) {
      case "auth/user-not-found":
        return setErroAuth("No user found with this email.");
      case "auth/user-disabled":
        return setErroAuth("User disabled.");
      case "auth/invalid-email":
        return setErroAuth(" Wrong email/password combination.");
      case "auth/wrong-password":
        return setErroAuth("Wrong email/password combination.");
      default:
        return setErroAuth("An unexpected error occurred.");
    }
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("authUser", token);
        await router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        handleAuthErrors(errorCode);
      });
  };

  return (
    <ContainerFormSC>
      <Typography variant={VariantsTypography.h3} color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.
      </Typography>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        {errorAuth && <NoUserMessageSC>{errorAuth}</NoUserMessageSC>}
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
          text="Sign In"
          variant={ButtonVariants.secondary}
        />
      </StyledFormSC>
      <LinkTemplate
        href="/signup"
        text="I dont have an account"
        variant={LinkVariants.linkSmall}
      />
    </ContainerFormSC>
  );
};
