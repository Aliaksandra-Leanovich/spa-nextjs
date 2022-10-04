import React from "react";
import Logo from "/public/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeader, LogOutBtn } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      {/*<StyledLogo to={routes.HOME}>

            </StyledLogo>*/}
      <img src={Logo.src} alt={"logo"} />
      <Navigation />
      <LogOutBtn>Logout</LogOutBtn>
    </StyledHeader>
  );
};
