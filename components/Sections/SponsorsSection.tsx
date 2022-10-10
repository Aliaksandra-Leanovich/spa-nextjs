import React from "react";

import ImageApple from "/public/icons/Apple.svg";
import ImageMicrosoft from "/public/icons/Microsoft.svg";
import ImageSlack from "/public/icons/Slack.svg";
import ImageGoogle from "/public/icons/Google.svg";
import {
  SponsorsBlockContainer,
  SponsorsContainerSC,
  SponsorsImageSC,
  TitleSC,
} from "./styles";
import { Colors } from "../../ui/colors";

export const SponsorsSection = () => {
  return (
    <SponsorsBlockContainer background={Colors.WHITE}>
      <TitleSC color={Colors.BLACK}>Our sponsors</TitleSC>
      <SponsorsContainerSC>
        <SponsorsImageSC src={ImageApple.src} alt={"apple"} />
        <SponsorsImageSC src={ImageMicrosoft.src} alt={"microsoft"} />
        <SponsorsImageSC src={ImageSlack.src} alt={"slack"} />
        <SponsorsImageSC src={ImageGoogle.src} alt={"google"} />
      </SponsorsContainerSC>
    </SponsorsBlockContainer>
  );
};
