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
  FreeTrialContainerSC,
  FreeTrialTitleSC,
  TextContainerFreeTrialSC,
  TextContainerFreeTrialSecondSC,
  WrapperSC,
} from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";

export const FreeTrialSection = () => {
  return (
    <BlueContainerSC>
      <WrapperSC>
        <FreeTrialContainerSC>
          <FreeTrialTitleSC>
            Try Whitepace <span>today</span>
          </FreeTrialTitleSC>

          <TextContainerFreeTrialSC>
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
          </TextContainerFreeTrialSC>

          <LinkTemplate
            href="/whitepace"
            text="Try Taskey free"
            variant={LinkVariants.linkLarge}
          />
          <TextContainerFreeTrialSecondSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              On a big team? Contact sales
            </Typography>
          </TextContainerFreeTrialSecondSC>

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
        </FreeTrialContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
