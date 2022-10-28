import React, { FormEvent, useState } from "react";
import {
  StyledNavigation,
  NavigationContainer,
  Arrow,
  ContainerButtonsSC,
} from "./styles";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import { Burger } from "../Burger/Burger";
import { Button } from "../Button/Button";
import ArrowIcon from "../../public/icons/arrow.png";
import { ItemNavigation } from "./ItemNavigation";
import { ILinkNavigationProps } from "./types";
import { Link } from "../Link/Link";
import { LinkVariants } from "../../enums/LinkVariants";
import { RightNavigation } from "./RightNavigation";
import { ButtonVariants } from "../../enums/ButtonVariants";

const config: ILinkNavigationProps[] = [
  {
    href: "#products",
    title: "Products",
    subcategories: [
      { name: "Overview", link: "#" },
      { name: "Pricing", link: "#" },
      { name: "Customer Stories", link: "#" },
    ],
    iconOpen: <Arrow src={ArrowIcon.src} />,
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
  },
  {
    href: "#pricing",
    title: "Pricing",
  },
];

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(async () => {
        localStorage.removeItem("authUser");
        await router.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <NavigationContainer>
      <StyledNavigation>
        {config.map((link, index) => (
          <ItemNavigation link={link} key={index} />
        ))}
        <ContainerButtonsSC>
          <Button
            handleClick={handleClick}
            type="submit"
            variant={ButtonVariants.primary}
          >
            Logout
          </Button>
        </ContainerButtonsSC>
        <Link
          href="/whitepacefree"
          text="Try Whitepace free"
          variant={LinkVariants.linkMedium}
        />
      </StyledNavigation>

      <Burger isOpen={isOpen} setOpen={setOpen} />
      <RightNavigation isOpen={isOpen} data={config} />
    </NavigationContainer>
  );
};
