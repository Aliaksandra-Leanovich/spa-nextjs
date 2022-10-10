import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";
import { useRouter } from "next/router";
import { ContainerForm, FormTitle, NoUserMessage, StyledForm } from "./styles";
import { Input } from "../Input/Input";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Colors } from "../../ui/colors";
import { Button } from "../Button/Button";

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
    <ContainerForm>
      <FormTitle>
        Get started for free. Add your whole team as your needs grow.{" "}
      </FormTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <NoUserMessage>{noUser ? "No such user" : ""}</NoUserMessage>
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
          color={Colors.BLUE}
          background={Colors.YELLOW}
          padding="18px 40px"
        />
      </StyledForm>
      <LinkTemplate href="/signup" text="I dont have an account" />
    </ContainerForm>
  );
};
