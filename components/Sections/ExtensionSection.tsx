import React from "react";
import { Colors } from "../../ui/colors";
import { Typography } from "../../ui/typography";
import { VariantsTypography } from "../../enums/TypographyVariants";
import { LinkVariants } from "../../enums/LinkVariants";
import { Link } from "../Link/Link";

import {
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  ImageSC,
  TextContainerSC,
  WrapperSC,
} from "./styles";
import ImageWork from "/public/icons/team-work4.png";

export const ExtensionSection = () => {
  return (
    <BlueContainerSC>
      <WrapperSC>
        <ContainerSC id="solutions">
          <DescriptionContainerSC>
            <Typography variant={VariantsTypography.h2} color={Colors.WHITE}>
              Use as Extension
            </Typography>
            <TextContainerSC>
              <Typography
                variant={VariantsTypography.paragraphSmall}
                color={Colors.WHITE}
              >
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </Typography>
            </TextContainerSC>

            <Link
              href="/whitepacefree"
              text="Lets Go"
              variant={LinkVariants.linkLarge}
            />
          </DescriptionContainerSC>
          <ImageContainerSC>
            <ImageSC src={ImageWork.src} alt={"work together"} />
          </ImageContainerSC>
        </ContainerSC>
      </WrapperSC>
    </BlueContainerSC>
  );
};
