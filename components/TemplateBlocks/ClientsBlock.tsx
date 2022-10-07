import React from "react";
import { Slider } from "../Slider/Slider";

import {
  BlockTitleBlack,
  ClientsContainer,
  WhiteSectionContainer,
} from "./styles";

export const ClientsBlock = () => {
  return (
    <WhiteSectionContainer>
      <ClientsContainer>
        <BlockTitleBlack>What Our Clients Says </BlockTitleBlack>
        <Slider />
      </ClientsContainer>
    </WhiteSectionContainer>
  );
};
