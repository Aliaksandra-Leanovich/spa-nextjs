import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import Apple from "/public/icons/apple-black-logo 2.svg";
import Window from "/public/icons/windows-logo 1.svg";
import Android from "/public/icons/android-logo 1.svg";
import { Colors } from "../../ui/colors";
import {
  AppImageSC,
  AppsContainerSC,
  SectionContainerSC,
  TextContainer,
  TodayContainerSC,
} from "./styles";
import { H2, ParagraphSmall } from "../../ui/typography";

export const TodaySection = () => {
  return (
    <SectionContainerSC
      background={Colors.BLUE}
      padding="140px 32px 32px 32px"
      mobilePadding="100px 16px"
      tabletPadding="140px 20px"
    >
      <TodayContainerSC>
        <H2 color={Colors.WHITE}>Try Whitepace today</H2>
        <TextContainer margin="24px 0 40px 0">
          <ParagraphSmall color={Colors.WHITE}>
            Get started for free. Add your whole team as your needs grow.
          </ParagraphSmall>
        </TextContainer>

        <LinkTemplate href="/whitepace" text="Try Taskey free" />
        <TextContainer margin="40px 0">
          <ParagraphSmall color={Colors.WHITE}>
            On a big team? Contact sales
          </ParagraphSmall>
        </TextContainer>

        <AppsContainerSC>
          <AppImageSC src={Apple.src} alt="apple" />
          <AppImageSC src={Window.src} alt="window" />
          <AppImageSC src={Android.src} alt="android" />
        </AppsContainerSC>
      </TodayContainerSC>
    </SectionContainerSC>
  );
};
