import React from "react";
import ImageApple from "/public/icons/Apple.svg";
import ImageMicrosoft from "/public/icons/Microsoft.svg";
import ImageSlack from "/public/icons/Slack.svg";
import ImageGoogle from "/public/icons/Google.svg";
import {
  ClientsContainer,
  SponsorsContainerSC,
  SponsorsImageSC,
  WhiteContainerSC,
} from "./styles";
import { Colors } from "../../ui/colors";
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const SponsorsSection = () => {
  return (
    <WhiteContainerSC>
      <ClientsContainer>
        <TypographySC variant={VariantsTypography.h2} color={Colors.BLACK}>
          Our sponsors
        </TypographySC>
        <SponsorsContainerSC>
          <SponsorsImageSC src={ImageApple.src} alt={"apple"} />
          <SponsorsImageSC src={ImageMicrosoft.src} alt={"microsoft"} />
          <SponsorsImageSC src={ImageSlack.src} alt={"slack"} />
          <SponsorsImageSC src={ImageGoogle.src} alt={"google"} />
        </SponsorsContainerSC>
      </ClientsContainer>
    </WhiteContainerSC>
  );
};
