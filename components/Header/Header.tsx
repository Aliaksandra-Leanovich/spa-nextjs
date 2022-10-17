import React from "react";

import Logo from "/public/icons/logo.svg";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeaderSC, LogoContainerSC } from "./style";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <LogoContainerSC>
        <Logo />
      </LogoContainerSC>
      <Navigation />
    </StyledHeaderSC>
  );
};
