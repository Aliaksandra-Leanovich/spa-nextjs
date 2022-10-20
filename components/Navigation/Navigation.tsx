import React, { FormEvent, useState } from "react";
import {
  StyledNavigation,
  NavigationContainer,
  StyledRightNavigation,
  ContainerLinks,
  ContainerButtons,
  Arrow,
  ArrowClose,
} from "./styles";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Burger } from "../Burger/Burger";
import { Button, ButtonVariants } from "../Button/Button";
import ArrowIcon from "../../public/icons/arrow.png";
import { ILinkSubcategories, ItemNavigation } from "./ItemNavigation";
import { ItemMobileNavigation } from "./ItemMobileNavigation";
import { LinkVariants } from "../LinkTemplate/types";

export interface ILinkNavigation {
  href: string;
  title: string;
  subcategories?: ILinkSubcategories[];
  iconOpen?: JSX.Element;
  iconClose?: JSX.Element;
}
const config: ILinkNavigation[] = [
  {
    href: "#products",
    title: "Products",
    subcategories: [
      { name: "Overview", link: "#" },
      { name: "Pricing", link: "#" },
      { name: "Customer Stories", link: "#" },
    ],
    iconOpen: <Arrow src={ArrowIcon.src} />,
    iconClose: <ArrowClose src={ArrowIcon.src} />,
  },
  {
    href: "#solutions",
    title: "Solutions",
  },
  {
    href: "#resources",
    title: "Resources",
    subcategories: [
      { name: "Blog", link: "#" },
      { name: "Guides tutorials", link: "#" },
      { name: "Help center", link: "#" },
    ],
    iconOpen: <Arrow src={ArrowIcon.src} />,
    iconClose: <ArrowClose src={ArrowIcon.src} />,
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
      .then(async () => {
        localStorage.removeItem("authUser");
        await router.push("/signin");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <NavigationContainer>
      <StyledNavigation>
        {config.map((link, index) => (
          <ItemNavigation {...link} key={index} />
        ))}
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            text="Logout"
            variant={ButtonVariants.primary}
          />
        </form>
        <LinkTemplate
          href="/whitepacefree"
          text="Try Whitepace free"
          variant={LinkVariants.linkMedium}
        />
      </StyledNavigation>

      <Burger open={open} setOpen={setOpen} />
      <StyledRightNavigation open={open}>
        <ContainerLinks>
          {config.map((link, index) => (
            <ItemMobileNavigation {...link} key={index} />
          ))}
        </ContainerLinks>
        <ContainerButtons>
          <form onSubmit={handleSubmit}>
            <Button
              variant={ButtonVariants.primary}
              type="submit"
              text="Logout"
            />
          </form>
          <LinkTemplate
            href="/whitepacefree"
            text="Try Whitepace free"
            variant={LinkVariants.linkMedium}
          />
        </ContainerButtons>
      </StyledRightNavigation>
    </NavigationContainer>
  );
};
