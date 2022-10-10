import React from "react";
import { Colors } from "../../ui/colors";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import favoriteBackground from "/public/icons/favoriteBackground.svg";
import {
  BackgroundImageContainerSC,
  BackgroundImageFavSC,
  ContainerSC,
  DescriptionContainerSC,
  DescriptionSC,
  ImageContainerSC,
  SectionContainerSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import ImageApps from "/public/icons/Apps.svg";

export const FavoriteSection = () => {
  return (
    <SectionContainerSC background={Colors.BLUE}>
      <BackgroundImageContainerSC>
        <BackgroundImageFavSC src={favoriteBackground.src} />
      </BackgroundImageContainerSC>
      <WrapperSC
        padding="140px 220px"
        mobilePadding="100px 16px"
        tabletPadding="140px 34px"
      >
        <ContainerSC>
          <ImageContainerSC src={ImageApps.src} alt={"work together"} />
          <DescriptionContainerSC>
            <TitleSC margin="0 0 24px 0" color={Colors.WHITE}>
              Work with Your Favorite Apps Using whitepace
            </TitleSC>
            <DescriptionSC margin="0 0 40px 0" color={Colors.WHITE}>
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </DescriptionSC>
            <LinkTemplate href="/whitepacefree" text="Read more" />
          </DescriptionContainerSC>
        </ContainerSC>
      </WrapperSC>
    </SectionContainerSC>
  );
};
