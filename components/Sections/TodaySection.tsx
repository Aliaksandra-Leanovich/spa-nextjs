import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import Apple from "/public/icons/apple-black-logo 2.svg";
import Window from "/public/icons/windows-logo 1.svg";
import Android from "/public/icons/android-logo 1.svg";
import { Colors } from "../../ui/colors";
import {
  AppImageSC,
  AppsContainerSC,
  BlueContainerSC,
  TextContainerTodaySC,
  TextContainerTodaySecondSC,
  TodayContainerSC,
  TodayTitleSC,
} from "./styles";
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const TodaySection = () => {
  return (
    <BlueContainerSC>
      <TodayContainerSC>
        <TodayTitleSC>
          Try Whitepace <span>today</span>
        </TodayTitleSC>

        <TextContainerTodaySC>
          <TypographySC
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            Get started for free.
          </TypographySC>
          <TypographySC
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            Add your whole team as your needs grow.
          </TypographySC>
        </TextContainerTodaySC>

        <LinkTemplate
          href="/whitepace"
          text="Try Taskey free"
          padding="20px 40px"
        />
        <TextContainerTodaySecondSC>
          <TypographySC
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            On a big team? Contact sales
          </TypographySC>
        </TextContainerTodaySecondSC>

        <AppsContainerSC>
          <AppImageSC src={Apple.src} alt="apple" />
          <AppImageSC src={Window.src} alt="window" />
          <AppImageSC src={Android.src} alt="android" />
        </AppsContainerSC>
      </TodayContainerSC>
    </BlueContainerSC>
  );
};
