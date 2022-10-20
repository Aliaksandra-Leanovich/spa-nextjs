import React from "react";
import { Colors } from "../../ui/colors";
import Background from "/public/icons/everywhereBackground.svg";
import {
  BackgroundImageContainerEverywhSC,
  BlueContainerSC,
  ContainerEverywhereSC,
  TextContainerSC,
} from "./styles";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

export const EverywhereSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageContainerEverywhSC>
        <Background />
      </BackgroundImageContainerEverywhSC>

      <ContainerEverywhereSC>
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
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </Typography>
        </TextContainerSC>

        <Link
          href="/whitepacefree"
          text="Try Taskey"
          variant={LinkVariants.linkLarge}
        />
      </ContainerEverywhereSC>
    </BlueContainerSC>
  );
};
