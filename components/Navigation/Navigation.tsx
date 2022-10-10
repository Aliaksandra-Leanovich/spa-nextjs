import React, { FormEvent, useState } from "react";

import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import router from "next/router";
import { routes } from "../../routes/routes";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Burger } from "../Burger/Burger";
import { Button } from "../Button/Button";
import { Colors } from "../../ui/colors";
import {
  ContainerButtonsSC,
  ContainerLinksSC,
  NavigationContainerSC,
  StyledLinkSC,
  StyledNavigationSC,
  StyledRightNavigationSC,
  TextLinkSC,
} from "./styles";

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
    <NavigationContainerSC>
      <StyledNavigationSC>
        {config.map((link, index) => (
          <Link href={link.href} key={index}>
            <StyledLinkSC>
              <TextLinkSC>{link.title}</TextLinkSC>
            </StyledLinkSC>
          </Link>
        ))}
        <form onSubmit={handleSubmit}>
          <Button
            color={Colors.LIGHTBLUE}
            background={Colors.BLUE}
            type="submit"
            text="Logout"
            padding="18px 40px"
          />
        </form>
        <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
      </StyledNavigationSC>

      <Burger open={open} setOpen={setOpen} />
      <StyledRightNavigationSC open={open}>
        <ContainerLinksSC>
          {config.map((link, index) => (
            <Link href={link.href} key={index}>
              <StyledLinkSC>
                <TextLinkSC>{link.title}</TextLinkSC>
              </StyledLinkSC>
            </Link>
          ))}
        </ContainerLinksSC>
        <ContainerButtonsSC>
          <form onSubmit={handleSubmit}>
            <Button
              color={Colors.LIGHTBLUE}
              background={Colors.BLUE}
              type="submit"
              text="Logout"
              padding="18px 40px"
            />
          </form>
          <LinkTemplate href="/whitepacefree" text="Try Whitepace free" />
        </ContainerButtonsSC>
      </StyledRightNavigationSC>
    </NavigationContainerSC>
  );
};
