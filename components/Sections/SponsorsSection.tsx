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
import { Typography } from "../../ui/typography";
import { VariantsTypography } from "../../enums/TypographyVariants";

export const SponsorsSection = () => {
  return (
    <WhiteContainerSC>
      <ClientsContainer>
        <Typography variant={VariantsTypography.h2} color={Colors.BLACK}>
          Our sponsors
        </Typography>
        <SponsorsContainerSC>
          <SponsorsImageSC>
            <ImageApple />
          </SponsorsImageSC>
          <SponsorsImageSC>
            <ImageMicrosoft />
          </SponsorsImageSC>
          <SponsorsImageSC>
            <ImageSlack />
          </SponsorsImageSC>
          <SponsorsImageSC>
            <ImageGoogle />
          </SponsorsImageSC>
        </SponsorsContainerSC>
      </ClientsContainer>
    </WhiteContainerSC>
  );
};
