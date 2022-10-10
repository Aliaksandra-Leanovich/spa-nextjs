import React from "react";
import { Colors } from "../../ui/colors";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import {
  ContainerSC,
  DescriptionContainerSC,
  DescriptionSC,
  ImageContainerSC,
  SectionContainerSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import ImageWork from "/public/icons/team-work3.webp";

export const ExtensionSection = () => {
  return (
    <SectionContainerSC background={Colors.BLUE}>
      <WrapperSC
        padding="140px 220px"
        mobilePadding="80px 16px"
        tabletPadding="140px 34px"
      >
        <ContainerSC id="solutions">
          <DescriptionContainerSC>
            <TitleSC color={Colors.WHITE} margin="0 0 24px 0">
              Use as Extension
            </TitleSC>
            <DescriptionSC color={Colors.WHITE} margin="0 0 60px 0">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </DescriptionSC>
            <LinkTemplate href="/whitepacefree" text="Lets Go" />
          </DescriptionContainerSC>
          <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        </ContainerSC>
      </WrapperSC>
    </SectionContainerSC>
  );
};
