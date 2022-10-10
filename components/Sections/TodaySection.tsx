import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import Apple from "/public/icons/apple-black-logo 2.svg";
import Window from "/public/icons/windows-logo 1.svg";
import Android from "/public/icons/android-logo 1.svg";
import { Colors } from "../../ui/colors";
import {
  AppImageSC,
  AppsContainerSC,
  DescriptionSC,
  SectionContainerSC,
  TitleSC,
  TodayContainerSC,
  WrapperSC,
} from "./styles";

export const TodaySection = () => {
  return (
    <SectionContainerSC background={Colors.BLUE}>
      <WrapperSC
        padding="140px 32px 32px 32px"
        mobilePadding="100px 16px"
        tabletPadding="140px 20px"
      >
        <TodayContainerSC>
          <TitleSC margin="0 0 24px 0" color={Colors.WHITE}>
            Try Whitepace today
          </TitleSC>
          <DescriptionSC margin="0 0 40px 0" color={Colors.WHITE}>
            Get started for free. Add your whole team as your needs grow.
          </DescriptionSC>
          <LinkTemplate href="/whitepace" text="Try Taskey free" />
          <DescriptionSC margin="40px 0" color={Colors.WHITE}>
            On a big team? Contact sales
          </DescriptionSC>
          <AppsContainerSC>
            <AppImageSC src={Apple.src} alt="apple" />
            <AppImageSC src={Window.src} alt="window" />
            <AppImageSC src={Android.src} alt="android" />
          </AppsContainerSC>
        </TodayContainerSC>
      </WrapperSC>
    </SectionContainerSC>
  );
};
