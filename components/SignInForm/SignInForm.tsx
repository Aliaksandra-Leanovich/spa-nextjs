import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import { ContainerFormSC, NoUserMessageSC, StyledFormSC } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Colors } from "../../ui/colors";
import { H3 } from "../../ui/typography";

interface IUserForm {
  email: string;
  password: string;
  errors: string;
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
        await router.push(routes.HOME);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setNoUser(errorMessage);
      });
  };

  return (
    <ContainerFormSC>
      <H3 color={Colors.WHITE}>
        Get started for free. Add your whole team as your needs grow.{" "}
      </H3>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        <NoUserMessageSC>{noUser ? "No such user" : ""}</NoUserMessageSC>
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
        <Button type="submit" text="Sign In" variant="secondary" />
      </StyledFormSC>
      <LinkTemplate href="/signup" text="I dont have an account" />
    </ContainerFormSC>
  );
};
