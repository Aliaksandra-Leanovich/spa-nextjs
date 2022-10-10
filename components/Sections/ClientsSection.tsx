import React from "react";
import { Colors } from "../../ui/colors";
import { Slider } from "../Slider/Slider";

import { ClientsContainer, TitleSC, WrapperSC } from "./styles";

export const ClientsSection = () => {
  return (
    <WrapperSC
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ClientsContainer>
        <TitleSC margin="0 0 60px 0" color={Colors.BLACK}>
          What Our Clients Says
        </TitleSC>
        <Slider />
      </ClientsContainer>
    </WrapperSC>
  );
};
