import React from "react";
import { Colors } from "../../ui/colors";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import favoriteBackground from "/public/icons/favoriteBackground.svg";
import {
  BackgroundImageContainerSC,
  BackgroundImageFavSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  SectionContainerSC,
  TextContainer,
} from "./styles";
import ImageApps from "/public/icons/Apps.svg";
import { H2, ParagraphSmall } from "../../ui/typography";

export const FavoriteSection = () => {
  return (
    <SectionContainerSC
      background={Colors.BLUE}
      padding="140px 220px"
      mobilePadding="100px 16px"
      tabletPadding="140px 34px"
    >
      <BackgroundImageContainerSC>
        <BackgroundImageFavSC src={favoriteBackground.src} />
      </BackgroundImageContainerSC>

      <ContainerSC>
        <ImageContainerSC src={ImageApps.src} alt={"work together"} />
        <DescriptionContainerSC>
          <H2 color={Colors.WHITE}>
            Work with Your Favorite Apps Using whitepace
          </H2>
          <TextContainer margin="24px 0 60px 0">
            <ParagraphSmall color={Colors.WHITE}>
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </ParagraphSmall>
          </TextContainer>

          <LinkTemplate href="/whitepacefree" text="Read more" />
        </DescriptionContainerSC>
      </ContainerSC>
    </SectionContainerSC>
  );
};
