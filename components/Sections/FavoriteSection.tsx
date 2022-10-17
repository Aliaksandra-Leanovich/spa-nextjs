import React from "react";
import { Colors } from "../../ui/colors";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import favoriteBackground from "/public/icons/favoriteBackground.svg";
import {
  BackgroundImageContainerSC,
  BackgroundImageFavSC,
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
} from "./styles";
import ImageApps from "/public/icons/Apps.svg";
import { Typography, VariantsTypography } from "../../ui/typography";

export const FavoriteSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageContainerSC>
        <BackgroundImageFavSC src={favoriteBackground.src} />
      </BackgroundImageContainerSC>

      <ContainerSC>
        <ImageContainerSC src={ImageApps.src} alt={"work together"} />
        <DescriptionContainerSC>
          <Typography variant={VariantsTypography.h2} color={Colors.WHITE}>
            Work with Your Favorite Apps Using whitepace
          </Typography>
          <TextContainerSC>
            <Typography
              variant={VariantsTypography.paragraphSmall}
              color={Colors.WHITE}
            >
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </Typography>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Read more"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
      </ContainerSC>
    </BlueContainerSC>
  );
};
