import React from "react";
import { Colors } from "../../ui/colors";
import { Typography, VariantsTypography } from "../../ui/typography";
import { LinkTemplate, LinkVariants } from "../LinkTemplate/LinkTemplate";
import {
  BlueContainerSC,
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  TextContainerSC,
} from "./styles";
import ImageWork from "/public/icons/team-work3.webp";

export const ExtensionSection = () => {
  return (
    <BlueContainerSC>
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
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </Typography>
          </TextContainerSC>

          <LinkTemplate
            href="/whitepacefree"
            text="Lets Go"
            variant={LinkVariants.linkLarge}
          />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
      </ContainerSC>
    </BlueContainerSC>
  );
};
