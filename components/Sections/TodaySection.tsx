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
  TextContainerSC,
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
        <TextContainerSC>
          <ParagraphSmall color={Colors.WHITE}>
            Get started for free. Add your whole team as your needs grow.
          </ParagraphSmall>
        </TextContainerSC>

        <LinkTemplate href="/whitepace" text="Try Taskey free" />
        <TextContainerSC>
          <ParagraphSmall color={Colors.WHITE}>
            On a big team? Contact sales
          </ParagraphSmall>
        </TextContainerSC>

        <AppsContainerSC>
          <AppImageSC src={Apple.src} alt="apple" />
          <AppImageSC src={Window.src} alt="window" />
          <AppImageSC src={Android.src} alt="android" />
        </AppsContainerSC>
      </TodayContainerSC>
    </SectionContainerSC>
  );
};
