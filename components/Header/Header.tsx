import React from "react";
import Logo from "/public/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeader, LogoContainer } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <img src={Logo.src} alt={"logo"} />
      </LogoContainer>
      <Navigation />
    </StyledHeader>
  );
};
