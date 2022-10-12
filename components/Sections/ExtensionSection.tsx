import React from "react";
import { Colors } from "../../ui/colors";
import { H2, ParagraphSmall } from "../../ui/typography";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ContainerSC,
  DescriptionContainerSC,
  ImageContainerSC,
  SectionContainerSC,
  TextContainerSC,
} from "./styles";
import ImageWork from "/public/icons/team-work3.webp";

export const ExtensionSection = () => {
  return (
    <SectionContainerSC
      background={Colors.BLUE}
      padding="140px 220px"
      mobilePadding="80px 16px"
      tabletPadding="140px 34px"
    >
      <ContainerSC id="solutions">
        <DescriptionContainerSC>
          <H2 color={Colors.WHITE}>Use as Extension</H2>
          <TextContainerSC margin="24px 0 60px 0">
            <ParagraphSmall color={Colors.WHITE}>
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </ParagraphSmall>
          </TextContainerSC>

          <LinkTemplate href="/whitepacefree" text="Lets Go" />
        </DescriptionContainerSC>
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
      </ContainerSC>
    </SectionContainerSC>
  );
};
