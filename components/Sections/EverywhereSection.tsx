import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Colors } from "../../ui/colors";
import managBackground from "/public/icons/everywhereBackground.svg";
import {
  BackgroundImageContainerEverywhSC,
  BackgroundImageSC,
  BlueContainerSC,
  ContainerEverywhereSC,
  TextContainerSC,
} from "./styles";
import { TypographySC, VariantsTypography } from "../../ui/typography";

export const EverywhereSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageContainerEverywhSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerEverywhSC>

      <ContainerEverywhereSC>
        <TypographySC variant={VariantsTypography.h2} color={Colors.WHITE}>
          Your work, everywhere you are
        </TypographySC>
        <TextContainerSC>
          <TypographySC
            variant={VariantsTypography.paragraphSmall}
            color={Colors.WHITE}
          >
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </TypographySC>
        </TextContainerSC>

        <LinkTemplate
          href="/whitepacefree"
          text="Try Taskey"
          padding="20px 40px"
        />
      </ContainerEverywhereSC>
    </BlueContainerSC>
  );
};
