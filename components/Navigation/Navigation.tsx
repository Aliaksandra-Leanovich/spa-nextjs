import React, { FormEvent, useState } from "react";
import {
  StyledNavigation,
  StyledLink,
  TextLink,
  Arrow,
  NavigationContainer,
  StyledRightNavigation,
  ContainerLinks,
  ContainerButtons,
} from "./styles";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import ArrowIcon from "/public/icons/arrow.svg";
import Link from "next/link";
import router from "next/router";
import { routes } from "../../routes/routes";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Burger } from "../Burger/Burger";
import { ButtonTemplate } from "../ButtonTemplate/ButtonTemplate";

const config = [
  {
    href: "#products",
    icon: ArrowIcon.src,
    title: "Products",
  },
  {
    href: "#solutions",
    icon: ArrowIcon.src,
    title: "Solutions",
  },
  {
    href: "#resources",
    icon: ArrowIcon.src,
    title: "Resources",
  },
  {
    href: "#pricing",
    icon: ArrowIcon.src,
    title: "Pricing",
  },
];

export const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <StyledLink>
              <TextLink>{link.title}</TextLink>

              <Arrow src={link.icon} alt={"arrow"} />
            </StyledLink>
          </Link>
        ))}
        <form onSubmit={handleSubmit}>
          <ButtonTemplate
            color="lightblue"
            type="submit"
            text="Logout"
            background="yellow"
          />
        </form>
        <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
      </StyledNavigation>

      <Burger open={open} setOpen={setOpen} />
      <StyledRightNavigation open={open}>
        <ContainerLinks>
          {config.map((link, index) => (
            <Link href={link.href} key={index}>
              <StyledLink>
                <TextLink>{link.title}</TextLink>
                <Arrow src={link.icon} alt={"arrow"} />
              </StyledLink>
            </Link>
          ))}
        </ContainerLinks>
        <ContainerButtons>
          <form onSubmit={handleSubmit}>
            <ButtonTemplate
              color="lightblue"
              type="submit"
              text="Logout"
              background="yellow"
            />
          </form>
          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </ContainerButtons>
      </StyledRightNavigation>
    </NavigationContainer>
  );
};
