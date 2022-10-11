import React, { FormEvent, useState } from "react";
import {
  StyledNavigation,
  NavigationContainer,
  StyledRightNavigation,
  ContainerLinks,
  ContainerButtons,
} from "./styles";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import router from "next/router";
import { routes } from "../../routes/routes";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Burger } from "../Burger/Burger";
import { Button } from "../Button/Button";
import { Colors } from "../../ui/colors";
import { Subtitle } from "../../ui/typography";

const config = [
  {
    href: "#products",
    title: "Products",
  },
  {
    href: "#solutions",
    title: "Solutions",
  },
  {
    href: "#resources",
    title: "Resources",
  },
  {
    href: "#pricing",
    title: "Pricing",
  },
];

export const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        localStorage.removeItem("authUser");
        router.push(routes.SIGNIN);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <NavigationContainer>
      <StyledNavigation>
        {config.map((link, index) => (
          <Link href={link.href} key={index}>
            <Subtitle color={Colors.WHITE} margin="0 40px 0 0">
              {link.title}
            </Subtitle>
          </Link>
        ))}
        <form onSubmit={handleSubmit}>
          <Button type="submit" text="Logout" variant="primary" />
        </form>
        <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
      </StyledNavigation>

      <Burger open={open} setOpen={setOpen} />
      <StyledRightNavigation open={open}>
        <ContainerLinks>
          {config.map((link, index) => (
            <Link href={link.href} key={index}>
              <Subtitle color={Colors.WHITE} margin="30px 0 0 0">
                {link.title}
              </Subtitle>
            </Link>
          ))}
        </ContainerLinks>
        <ContainerButtons>
          <form onSubmit={handleSubmit}>
            <Button variant="primary" type="submit" text="Logout" />
          </form>
          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </ContainerButtons>
      </StyledRightNavigation>
    </NavigationContainer>
  );
};
