import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Colors } from "../../ui/colors";
import managBackground from "/public/icons/everywhereBackground.svg";
import {
  BackgroundImageContainerEverywhSC,
  BackgroundImageSC,
  ContainerEverywhereSC,
  DescriptionSC,
  SectionContainerSC,
  TitleSC,
  WrapperSC,
} from "./styles";

export const EverywhereSection = () => {
  return (
    <SectionContainerSC background={Colors.BLUE}>
      <BackgroundImageContainerEverywhSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerEverywhSC>
      <WrapperSC
        padding="140px 220px"
        mobilePadding="100px 16px"
        tabletPadding="140px 34px"
      >
        <ContainerEverywhereSC>
          <TitleSC margin="0 0 24px 0" color={Colors.WHITE}>
            Your work, everywhere you are
          </TitleSC>
          <DescriptionSC margin="0 0 40px 0" color={Colors.WHITE}>
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </DescriptionSC>
          <LinkTemplate href="/whitepacefree" text="Try Taskey" />
        </ContainerEverywhereSC>
      </WrapperSC>
    </SectionContainerSC>
  );
};
