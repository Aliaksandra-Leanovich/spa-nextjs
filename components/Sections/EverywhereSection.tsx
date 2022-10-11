import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import { Colors } from "../../ui/colors";
import managBackground from "/public/icons/everywhereBackground.svg";
import {
  BackgroundImageContainerEverywhSC,
  BackgroundImageSC,
  ContainerEverywhereSC,
  SectionContainerSC,
  TextContainer,
} from "./styles";
import { H2, ParagraphSmall } from "../../ui/typography";

export const EverywhereSection = () => {
  return (
    <SectionContainerSC
      background={Colors.BLUE}
      padding="140px 220px"
      mobilePadding="100px 16px"
      tabletPadding="140px 34px"
    >
      <BackgroundImageContainerEverywhSC>
        <BackgroundImageSC src={managBackground.src} />
      </BackgroundImageContainerEverywhSC>

      <ContainerEverywhereSC>
        <H2 color={Colors.WHITE}>Your work, everywhere you are</H2>
        <TextContainer margin="24px 0 60px 0">
          <ParagraphSmall color={Colors.WHITE}>
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </ParagraphSmall>
        </TextContainer>

        <LinkTemplate href="/whitepacefree" text="Try Taskey" />
      </ContainerEverywhereSC>
    </SectionContainerSC>
  );
};
