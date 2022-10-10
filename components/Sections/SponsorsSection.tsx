import React from "react";

import ImageApple from "/public/icons/Apple.svg";
import ImageMicrosoft from "/public/icons/Microsoft.svg";
import ImageSlack from "/public/icons/Slack.svg";
import ImageGoogle from "/public/icons/Google.svg";
import {
  ClientsContainer,
  SectionContainerSC,
  SponsorsContainerSC,
  SponsorsImageSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import { Colors } from "../../ui/colors";

export const SponsorsSection = () => {
  return (
    <WrapperSC
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ClientsContainer>
        <TitleSC color={Colors.BLACK} margin="0 0 100px">
          Our sponsors
        </TitleSC>
        <SponsorsContainerSC>
          <SponsorsImageSC src={ImageApple.src} alt={"apple"} />
          <SponsorsImageSC src={ImageMicrosoft.src} alt={"microsoft"} />
          <SponsorsImageSC src={ImageSlack.src} alt={"slack"} />
          <SponsorsImageSC src={ImageGoogle.src} alt={"google"} />
        </SponsorsContainerSC>
      </ClientsContainer>
    </WrapperSC>
  );
};
