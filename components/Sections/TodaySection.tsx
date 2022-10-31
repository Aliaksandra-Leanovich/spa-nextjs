import React from "react";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import AppleIcon from "/public/icons/apple-black-logo 2.svg";
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
import { Typography } from "../../ui/typography";
import { VariantsTypography } from "../../enums/TypographyVariants";

export const TodaySection = () => {
  return (
    <BlueContainerSC>
      <TodayContainerSC>
        <TodayTitleSC>
          Try Whitepace <span>today</span>
        </TodayTitleSC>

        <TextContainerTodaySC>
          <Typography
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            Get started for free.
          </Typography>
          <Typography
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            Add your whole team as your needs grow.
          </Typography>
        </TextContainerTodaySC>

        <LinkTemplate
          href="/whitepace"
          text="Try Taskey free"
          variant={LinkVariants.linkLarge}
        />
        <TextContainerTodaySecondSC>
          <Typography
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            On a big team? Contact sales
          </Typography>
        </TextContainerTodaySecondSC>

        <AppsContainerSC>
          <AppImageSC>
            <AppleIcon />
          </AppImageSC>
          <AppImageSC>
            <Window />
          </AppImageSC>
          <AppImageSC>
            <Android />
          </AppImageSC>
        </AppsContainerSC>
      </TodayContainerSC>
    </BlueContainerSC>
  );
};
