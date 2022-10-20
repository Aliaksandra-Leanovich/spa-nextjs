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

interface IUserForm {
  email: string;
  password: string;
  errors?: string;
}

interface IUserLocal {
  accessToken: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const SignInForm = () => {
  const [noUser, setNoUser] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const router = useRouter();

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential: any) => {
        const user = userCredential.user.accessToken;
        localStorage.setItem("authUser", JSON.stringify(user));
        await router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setNoUser(errorMessage);
      });
  };

  return (
    <ContainerFormSC>
      <Typography variant={VariantsTypography.h3} color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.{" "}
      </Typography>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        {noUser && <NoUserMessageSC>{noUser}</NoUserMessageSC>}
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
