import React from "react";
import {
  AppImage,
  AppsContainer,
  BlockTitleBlack,
  SponsorsBlockContainer,
} from "./style";
import ImageApple from "/public/Apple.svg";
import ImageMicrosoft from "/public/Microsoft.svg";
import ImageSlack from "/public/Slack.svg";
import ImageGoogle from "/public/Google.svg";

export const SponsorsBlock = () => {
  return (
    <SponsorsBlockContainer>
      <BlockTitleBlack>Our sponsors</BlockTitleBlack>
      <AppsContainer>
        <AppImage src={ImageApple.src} alt={"apple"} />
        <AppImage src={ImageMicrosoft.src} alt={"microsoft"} />
        <AppImage src={ImageSlack.src} alt={"slack"} />
        <AppImage src={ImageGoogle.src} alt={"google"} />
      </AppsContainer>
    </SponsorsBlockContainer>
  );
};
