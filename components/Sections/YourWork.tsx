import React from "react";
import { Colors } from "../../ui/colors";
import Background from "/public/icons/everywhereBackground.svg";
import {
  BackgroundImageContainerYourWorkSC,
  BlueContainerSC,
  ContainerYourWorkSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";
import { Link } from "../Link/Link";
import { LinkVariants } from "../../enums/LinkVariants";

export const YourWorkSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageContainerYourWorkSC>
        <Background />
      </BackgroundImageContainerYourWorkSC>
      <WrapperSC>
        <ContainerYourWorkSC>
          <Typography variant={VariantsTypography.h2} color={Colors.WHITE}>
            Your work, everywhere you are
          </Typography>
          <TextContainerSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </Typography>
          </TextContainerSC>

          <Link
            href="/whitepacefree"
            text="Try Taskey"
            variant={LinkVariants.linkLarge}
          />
        </ContainerYourWorkSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
