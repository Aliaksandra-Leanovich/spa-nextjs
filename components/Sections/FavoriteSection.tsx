import React from "react";
import { Colors } from "../../ui/colors";
import favoriteBackground from "/public/icons/favoriteBackground.png";
import {
  BackgroundImageFavSC,
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
} from "./styles";
import ImageApps from "/public/icons/Apps.png";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

export const FavoriteSection = () => {
  return (
    <BlueContainerSC>
      <BackgroundImageFavSC src={favoriteBackground.src} />

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

          <Link
            href="/whitepacefree"
            text="Read more"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
      </ContainerSC>
    </BlueContainerSC>
  );
};
