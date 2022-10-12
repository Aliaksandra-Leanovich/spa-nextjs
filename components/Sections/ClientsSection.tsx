import React from "react";
import { Colors } from "../../ui/colors";
import { H2 } from "../../ui/typography";
import { Slider } from "../Slider/Slider";

import {
  ClientsContainer,
  SectionContainerSC,
  TextContainerSC,
} from "./styles";

export const ClientsSection = () => {
  return (
    <SectionContainerSC
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ClientsContainer>
        <TextContainerSC margin="0 0 60px 0">
          <H2 color={Colors.BLACK}>What Our Clients Says</H2>
        </TextContainerSC>

        <Slider />
      </ClientsContainer>
    </SectionContainerSC>
  );
};
