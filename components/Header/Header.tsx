import React from "react";
import { Logo } from "../../public/icons";
import { Navigation } from "../Navigation";
import {
  StyledHeaderSC,
  LogoContainerSC,
  WrapperSC,
  ContainerSC,
} from "./style";

export const Header = () => {
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerSC>
          <LogoContainerSC href="/">
            <Logo />
          </LogoContainerSC>
          <Navigation />
        </ContainerSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
