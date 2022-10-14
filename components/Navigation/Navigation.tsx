import React, { FormEvent, useState } from "react";
import {
  StyledNavigation,
  NavigationContainer,
  StyledRightNavigation,
  ContainerLinks,
  ContainerButtons,
  HoverLinkSC,
} from "./styles";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import router from "next/router";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Burger } from "../Burger/Burger";
import { Button, Variants } from "../Button/Button";

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
        router.push("/signin");
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
            <HoverLinkSC>{link.title}</HoverLinkSC>
          </Link>
        ))}
        <form onSubmit={handleSubmit}>
          <Button type="submit" text="Logout" variant={Variants.primary} />
        </form>
        <LinkTemplate
          href="/whitepacefree"
          text="Try Whitepace free"
          padding="18px 24px"
        />
      </StyledNavigation>

      <Burger open={open} setOpen={setOpen} />
      <StyledRightNavigation open={open}>
        <ContainerLinks>
          {config.map((link, index) => (
            <Link href={link.href} key={index}>
              <HoverLinkSC>{link.title}</HoverLinkSC>
            </Link>
          ))}
        </ContainerLinks>
        <ContainerButtons>
          <form onSubmit={handleSubmit}>
            <Button variant={Variants.primary} type="submit" text="Logout" />
          </form>
          <LinkTemplate
            href="/whitepacefree"
            text="Try Whitepace free"
            padding="18px 24px"
          />
        </ContainerButtons>
      </StyledRightNavigation>
    </NavigationContainer>
  );
};
